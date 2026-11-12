#!/bin/sh
# Make a generated song loop: drop its trailing fade-out, then crossfade the tail into the head so the end
# of the file flows into its own start.   usage: tools/loop_music.sh in.m4a out.mp3 [keep_seconds] [xfade_seconds]
in="$1"; out="$2"; keep="${3:-0}"; d="${4:-4}"
dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$in"); [ "$keep" = 0 ] && keep=$(python3 -c "print(round($dur-8,2))")
ffmpeg -y -v error -i "$in" -filter_complex "[0]atrim=0:$keep,asetpts=N/SR/TB,asplit[x][y];[x]atrim=0:$d,asetpts=N/SR/TB[a];[y]atrim=$d,asetpts=N/SR/TB[b];[b][a]acrossfade=d=$d:c1=tri:c2=tri,loudnorm=I=-18:TP=-2" -ac 2 -ar 44100 -b:a 128k "$out"
