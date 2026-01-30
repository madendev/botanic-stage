import { ImageResponse } from 'next/og';

/* {Renderizar icon estáticamente} */
export const dynamic = 'force-static';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.57 135" width={24} height={19}>
        <path
          d="M2.14 0h44.3c1.14 0 2.23.46 3.03 1.27l31.24 31.61c.8.81 1.26 1.92 1.26 3.07v97.97c0 .97-1.17 1.45-1.84.76L1.21 52.48A4.34 4.34 0 0 1 0 49.46V2.17C0 .97.96 0 2.14 0m169.29 0h-44.3c-1.14 0-2.23.46-3.03 1.27L92.86 32.88c-.8.81-1.26 1.92-1.26 3.07v97.97c0 .97 1.17 1.45 1.84.76l78.91-82.19c.78-.81 1.21-1.89 1.21-3.02V2.17A2.14 2.14 0 0 0 171.43 0"
          fill="#000000"
        />
      </svg>
    </div>,
    size
  );
}
