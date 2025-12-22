export default function RatingDisplay() {
  return (
    <div className="flex items-center justify-center" style={{ width: '182px', height: '180px' }}>
      <div className="flex items-baseline">
        <span className="text-black" style={{ fontWeight: 500, fontSize: '120px', lineHeight: '100%', letterSpacing: '0%' }}>4.5</span>
        <span className="text-3xl text-gray-500 ml-1">/5</span>
      </div>
    </div>
  );
}