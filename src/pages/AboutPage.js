import React from "react";
import "./AboutPage.css";

// આ પેજ માટે જરૂરી સંપતિ આયાત કરો
import activitiesImage from "../assets/activities-image.jpg";
import CommitteeMemberCard from "../components/CommitteeMemberCard";
// સભ્યોની છબીઓ આયાત કરો
import member1 from "../assets/member1.jpeg";
import member2 from "../assets/member2.jpeg";
import member3 from "../assets/member3.jpeg";
import member4 from "../assets/member4.jpeg";
import member5 from "../assets/member5.jpeg";

function AboutPage() {
  const committeeData = [
    { name: "રાજેશભાઈ છગનભાઈ તરસરીયા", role: "(ગામ : દડલી)", photo: member1 },
    { name: "પંકેશભાઈ મથુરભાઈ તરસરીયા", role: "(ગામ : કસાણ)", photo: member2 },
    { name: "પરેશભાઈ દુલાભાઈ તરસરીયા", role: "(ગામ : દડલી)", photo: member3 },
    { name: "કિશોરભાઈ લાખાભાઈ તરસરીયા", role: "(ગામ : મોટા ખુટવડા)", photo: member4 },
    { name: "શૈલેષભાઈ વિઠ્ઠલભાઈ તરસરીયા", role: "(ગામ : નાની વડાળ)", photo: member5 },
  ];

  return (
    <div className="about-page">
      {/* હીરો વિભાગ */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="om-symbol">ॐ</div>
          <h1>તરસરિયા પરિવાર વિશે</h1>
          <p>તરસરિયા પરિવાર - એક આધ્યાત્મિક સમુદાય</p>
          <div className="divider">
            <span>🪷</span>
            <span>🪷</span>
            <span>🪷</span>
          </div>
        </div>
      </section>

      <div className="container">
        {/* મિશન અને મૂલ્યો વિભાગ */}
        <section className="mission-section">
          <div className="section-header">
            <h2>અમારું પવિત્ર મિશન</h2>
            <p className="section-subtitle">
              धर्मो रक्षति रक्षितः - ધર્મ તે જ રક્ષણ આપે છે જે તેને રક્ષણ આપે છે
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="card-icon">🛕</div>
              <h3>આધ્યાત્મિક વૃદ્ધિ</h3>
              <p>
                પ્રાચીન જ્ઞાન, દૈનિક પ્રાથના અને પવિત્ર વિધિ દ્વારા આત્માઓની
                પરવારવા
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon">🎭</div>
              <h3>સાંસ્કૃતિક વારસો</h3>
              <p>
                અમારી સમૃદ્ધ પરંપરાને જાળવી રાખવું અને ભક્તિપૂર્વક ઉત્સવ ઉજવવા
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon">🤲</div>
              <h3>સમુદાય સેવા</h3>
              <p>સેવ, કરુણા અને નિ:સ્વાર્થ સમર્પણ દ્વારા માનવજાત સેવા</p>
            </div>
          </div>
        </section>

        {/* અમારા વિશે અને પ્રવૃત્તિઓ વિભાગ */}
        <section className="content-section">
          <div className="section-header">
            <h2>અમારી યાત્રા અને પ્રવૃત્તિઓ</h2>
            <p className="section-subtitle">
              सर्वे भवन्तु सुखिनः - બધાં જ આનંદિત રહે
            </p>
          </div>

          <div className="two-column-layout reverse">
            <div className="column-image">
              <div className="image-wrapper">
                <img src={activitiesImage} alt="સમુદાય પ્રવૃત્તિઓ" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <span className="overlay-icon">🙏</span>
                    <p>પવિત્ર દર્શન</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-text">
              <h3>અમારું મિશન અને હેતુ</h3>
              <p>
                નમસ્તે! અમારા આધ્યાત્મિક પરિવારમાં આપનું સ્વાગત છે. અમારા મિશન એ
                પૂજાગૃહ માટે પવિત્ર સ્થળ પ્રદાન કરવું, સનાતન ધર્મ ના શાશ્વત
                મૂલ્યોને પ્રોત્સાહિત કરવું અને પ્રેમ અને સમર્પણથી અમારી સમુદાયની
                સેવા કરવી છે.
              </p>
              <div className="activities-list">
                <div className="activity-item">
                  <span className="activity-icon">🕉️</span>
                  <div>
                    <strong>દૈનિક પૂજાઓ અને સત્સંગ</strong>
                    <p>નિયમિત આધ્યાત્મિક બેઠકો અને પૂજા સેવાનીઓ</p>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">🎪</span>
                  <div>
                    <strong>ઉત્સવ ઉજવણી</strong>
                    <p>હિન્દુ ઉત્સવો અને પરંપરાઓની જીવંત ઉજવણીઓ</p>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">👶</span>
                  <div>
                    <strong>બાલવિહાર ક્લાસો</strong>
                    <p>બાળકો અને યુવાનો માટેનો સાંસ્કૃતિક શિક્ષણ</p>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">🧘</span>
                  <div>
                    <strong>યોગ અને ધ્યાન</strong>
                    <p>મન, શરીર અને આત્મા માટેની આરોગ્ય સત્રો</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* સમિતિ સભ્યો વિભાગ */}
        <section className="committee-section">
          <div className="section-header">
            <h2>અમારી સમર્પિત સમિતિ</h2>
            <p className="section-subtitle">
              નેતૃત્વ અને સેવા - સેવા દ્વારા નેતૃત્વ
            </p>
          </div>

          <div className="committee-grid">
            {committeeData.map((member, index) => (
              <CommitteeMemberCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* મૂલ્યો વિભાગ */}
        <section className="values-section">
          <div className="section-header">
            <h2>અમારા મૂળભૂત મૂલ્યો</h2>
            <p className="section-subtitle">
              सत्यं शिवं सुन्दरम् - સત્ય, શુદ્ધતા, સુંદરતા
            </p>
          </div>

          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">1</div>
              <h4>ભક્તિ (भक्ति)</h4>
              <p>દિવ્ય માટે અડગ શ્રદ્ધા અને સમર્પણ</p>
            </div>
            <div className="value-item">
              <div className="value-number">2</div>
              <h4>એકતા (एकता)</h4>
              <p>અમે અમારી સમુદાયમાં સુમેળ અને એકેનતા વધારીએ છીએ</p>
            </div>
            <div className="value-item">
              <div className="value-number">3</div>
              <h4>સેવા (सेवा)</h4>
              <p>માણસ અને સમાજ માટેની નિ:સ્વાર્થ સેવા</p>
            </div>
            <div className="value-item">
              <div className="value-number">4</div>
              <h4>પરંપરા (परंपरा)</h4>
              <p>અમારા પવિત્ર વારસાને જાળવી રાખવી અને અગ્રેસર કરવી</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
