import React from "react";
import "./HistoryPage.css";

// આ પેજ માટે જરૂરી સંપતિ આયાત કરો
import historyImage from "../assets/history-image.jpg";

function HistoryPage() {
  const timelineData = [
    {
      year: "1985",
      title: "શરૂઆત",
      description:
        "ભક્તિથી ભરેલા કેટલાંક કુટુંબો સાપ્તાહિક પ્રાથનાથી ભાડાના હોલમાં ભેગા થયા",
      icon: "🏠",
    },
    {
      year: "1990",
      title: "પ્રથમ મંદિર",
      description: "સમુદાયે જમીન ખરીદી અને સરળ મંદિરના ઢાંચાનું નિર્માણ કર્યું",
      icon: "🏗️",
    },
    {
      year: "1995",
      title: "વિકસિત સમુદાય",
      description:
        "સભ્યતા 100 કરતા વધુ કુટુંબમાં વિસ્તરી જે નિયમિત ઉત્સવ ઉજવે છે",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      year: "2000",
      title: "મંદિરનું વિસ્તરણ",
      description: "વધેલા ભક્તો માટે મુખ્ય પુનર્નિર્માણ અને વિસ્તરણ",
      icon: "🛕",
    },
    {
      year: "2010",
      title: "સાંસ્કૃતિક કેન્દ્ર",
      description: "સમુદાય હોલ, લાઇબ્રેરી, અને શૈક્ષણિક સુવિધાઓ ઉમેર્યા",
      icon: "📚",
    },
    {
      year: "2020",
      title: "ડિજિટલયુગ",
      description:
        "તકનીક સ્વીકારી અને ઓનલાઈન પ્રાર્થના અને વર્ચુઅલ ઉજવણીઓ શરૂની",
      icon: "💻",
    },
  ];

  const foundingMembers = [
    { name: "લેટે શ્રી મોહન દાસ", role: "સ્થાપક પ્રમુખ" },
    { name: "લેટે શ્રીમતી કમલા દેવી", role: "પ્રથમ સચિવ" },
    { name: "શ્રી રાજ કુમાર", role: "મુખ્ય વાસ્તુકાર" },
    { name: "શ્રીમતી સુનિતા શર્મા", role: "સાંસ્કૃતિક ડિરેક્ટર" },
  ];

  return (
    <div className="history-page">
      {/* હીરો વિભાગ */}
      <section className="history-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="om-symbol">ॐ</div>
          <h1>અમારી પવિત્ર યાત્રા</h1>
          <p>અમારો પવિત્ર ઈતિહાસ - આસ્થા અને ભક્તિની વારસો</p>
          <div className="hero-divider">
            <span>🕉️</span>
            <span>🪷</span>
            <span>🕉️</span>
          </div>
        </div>
      </section>

      <div className="container">
        {/* ઇતિહાસ વાર્તા વિભાગ */}
        <section className="history-story-section">
          <div className="section-header">
            <h2>આસ્થા ની યાત્રા</h2>
            <p className="section-subtitle">શ્રદ્ધા અને સમર્પણ ની યાત્રા</p>
          </div>

          <div className="two-column-layout">
            <div className="column-image">
              <div className="image-frame">
                <img src={historyImage} alt="તરસરીયા પરિવારના સ્થાપક સભ્ય" />
                <div className="image-caption">
                  <span className="caption-icon">📸</span>
                  <p>અમારા સ્થાપક સભ્યો - સમુદાયના સ્તંભો</p>
                </div>
              </div>
            </div>
            <div className="column-text">
              <h3>સાદગીથી પવિત્ર શિખરો સુધી</h3>
              <p className="intro-text">
                નમસ્તે! અમારી વાર્તા એક સરળ પણ ઊંડા દ્રષ્ટિ સાથે શરૂ થાય છે - એક
                આધ્યાત્મિક ઘર બનાવવાનું, જ્યાં પરંપરા ભક્તિના મેલમાં મળે, અને
                સમુદાયના સંબંધો દૈવી અનુગ્રહમાં ફૂલેફાલે.
              </p>

              <div className="story-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🙏</span>
                  <div>
                    <strong>આસ્થાથી સ્થાપના</strong>
                    <p>
                      એક આધ્યાત્મિક આશ્રયની શોધમાં ભક્તિથી ભરેલા કુટુંબો દ્વારા
                      સ્થાપિત
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏛️</span>
                  <div>
                    <strong>પ્રેમથી નિર્માણ</strong>
                    <p>
                      પ્રત્યેક ઇંટ ભક્તિથી રાખેલી, પ્રત્યેક પ્રાર્થના
                      વિશ્વાસપૂર્વક આરપાર
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🌱</span>
                  <div>
                    <strong>સાથે વિકસવી</strong>
                    <p>નાની ભેગીથી લઈને એક વિકસિત આધ્યાત્મિક સમુદાયત</p>
                  </div>
                </div>
              </div>

              <blockquote className="sacred-quote">
                "धर्मस्य तत्त्वं निहितं गुहायां"
                <span>ધર્મની તત્વમાં અંતર જ રહેલું છે</span>
              </blockquote>
            </div>
          </div>
        </section>

        {/* સમયગાળા વિભાગ */}
        <section className="timeline-section">
          <div className="section-header">
            <h2>અમારો પવિત્ર સમયગાળા</h2>
            <p className="section-subtitle">
              સમયની યાત્રા - સમયના માધ્યમથી યાત્રા
            </p>
          </div>

          <div className="timeline-container">
            {timelineData.map((event, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-content">
                  <div className="timeline-icon">{event.icon}</div>
                  <div className="timeline-year">{event.year}</div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </section>

        {/* સ્થાપક સભ્યો વિભાગ */}
        <section className="founders-section">
          <div className="section-header">
            <h2>અમારા પૂજ્ય સ્થપતિ</h2>
            <p className="section-subtitle">સ્થાપક - પ્રશાસક નેતાઓ</p>
          </div>

          <div className="founders-grid">
            {foundingMembers.map((member, index) => (
              <div key={index} className="founder-card">
                <div className="founder-avatar">
                  <span className="avatar-icon">🙏</span>
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <div className="founder-blessing">
                  <span>🪷</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* વારસો વિભાગ */}
        <section className="legacy-section">
          <div className="legacy-content">
            <div className="legacy-icon">🕉️</div>
            <h3>અમારા સતત વારસો</h3>
            <p>
              જેમ અમે આ પવિત્ર યાત્રા ચાલુ રાખીએ છીએ, તેમ મેં અમારા સ્થાપક
              સિદ્ધાંતોને જાળવવા માટે પ્રતિબદ્ધ રહીશું: અમારા આધ્યાત્મિક વારસાને
              જાળવી રાખવો, સમુદાયના જોડાણોને પોષવું અને નિઃસ્વાર્થ ભક્તિથી સેવા
              કરવી. અમારી વાર્તા પ્રત્યેક પ્રાર્થનાથી, પ્રત્યેક ઉત્સવની ઉજવણીથી
              અને દૈવી કૃપાથી સ્પર્શિત પ્રતિ જંતુથી આગળ વધે છે.
            </p>
            <div className="legacy-stats">
              <div className="stat-item">
                <span className="stat-number">40+</span>
                <span className="stat-label">સેવાનાં વર્ષો</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">કુટુંબો</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">વાર્ષિક કાર્યક્રમો</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HistoryPage;
