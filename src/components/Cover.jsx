import './Cover.css'

// Auto-detect cover images dropped into src/assets/covers/ (sorted by filename).
const coverModules = import.meta.glob('../assets/covers/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
})
const covers = Object.keys(coverModules)
  .sort()
  .map((k) => coverModules[k])

export default function Cover() {
  if (covers.length === 0) {
    return (
      <section className="cover container">
        <div className="cover-placeholder">
          Drop your cover image into <code>src/assets/covers/</code>
        </div>
      </section>
    )
  }

  return (
    <section className="cover container">
      {covers.map((src, i) => (
        <img key={i} className="cover-img" src={src} alt={`Cover ${i + 1}`} loading="lazy" />
      ))}
    </section>
  )
}
