import type { Ref } from 'react';

type Props = {
  width: string;
  type: string;
  src: string;
  ref: Ref<HTMLVideoElement>;
};

export default function MyVideoPlayer({ width, type, src, ref }: Props) {
  return (
    // biome-ignore lint: "there is no subtitle file"
    <video width={width} ref={ref}>
      <source src={src} type={type} />
    </video>
  );
}
