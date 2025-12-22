export default function TotalReviews() {
  return (
    <div className="text-center" style={{ width: '186px', height: '184px', gap: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 500, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%', color: '#6B7280' }}>Total Reviews</div>
      <div style={{ fontWeight: 600, fontSize: '60px', lineHeight: '100%', letterSpacing: '0%', color: '#020202' }}>3.0K</div>
      <button style={{ width: '220px', height: '56px', borderRadius: '12px', padding: '16px 32px', gap: '8px', backgroundColor: '#BE968E', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
        Add Comment
        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
    </div>
  );
}