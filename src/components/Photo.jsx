export function Photo({ src, alt, width, height, className, eager = false }) {
  const webpSrcSet = `${src}.webp 1x, ${src}@2x.webp 2x`;
  const jpegSrcSet = `${src}.jpg 1x, ${src}@2x.jpg 2x`;

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} />
      <img
        src={`${src}.jpg`}
        srcSet={jpegSrcSet}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}
