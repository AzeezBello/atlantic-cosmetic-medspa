import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#051120',
          borderRadius: '12px',
          border: '2px solid #0f5fd1',
          color: '#ffffff',
          fontFamily: 'Georgia, serif',
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: '-0.04em',
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
