import { FormEvent, useState } from "react";

const photos = [
  "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1661366394743-fe30fe478ef7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1744870132190-5c02d3f8d9f9?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1708388066828-af75608c3b2f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1679581083563-0d9e9e4b009e?auto=format&fit=crop&w=900&q=85",
];

type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "clip"
  | "instagram"
  | "manager"
  | "message"
  | "people"
  | "play"
  | "report"
  | "star"
  | "youtube";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    clip: <><path d="M15 7v10a5 5 0 0 1-10 0V6a4 4 0 0 1 8 0v10a3 3 0 0 1-6 0V7" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    manager: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /><path d="m17 11 2 2 3-4" /></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 9h8M8 13h5" /></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    play: <path d="m8 5 11 7-11 7Z" />,
    report: <><path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><path d="M8 15v-3M12 15V8M16 15v-5" /></>,
    star: <path d="m12 2 3 6 7 .9-5 4.8 1.3 6.8L12 17.3l-6.3 3.2L7 13.7 2 8.9 9 8Z" />,
    youtube: <><path d="M22 12s0-4-1-6c-.6-1.1-1.5-1.5-2.7-1.6C16.5 4 12 4 12 4s-4.5 0-6.3.4C4.5 4.5 3.6 5 3 6c-1 2-1 6-1 6s0 4 1 6c.6 1.1 1.5 1.5 2.7 1.6C7.5 20 12 20 12 20s4.5 0 6.3-.4c1.2-.1 2.1-.5 2.7-1.6 1-2 1-6 1-6Z" /><path d="m10 9 5 3-5 3Z" /></>,
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`logo ${light ? "logo-light" : ""}`}>
      <span className="logo-pin"><span /></span>
      <strong>어디가게</strong>
    </div>
  );
}

function CTA({ children = "체험단 상담 신청하기", light = false }: { children?: React.ReactNode; light?: boolean }) {
  return (
    <button className={`cta ${light ? "cta-light" : ""}`} onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
      {children}<Icon name="arrow" />
    </button>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</div>;
}

function ReviewCard({ photo, tag, title, author }: { photo: string; tag: string; title: string; author: string }) {
  return (
    <article className="review-card">
      <div className="review-image"><img src={photo} alt="" /><span>{tag}</span></div>
      <div className="review-content">
        <div className="stars">★★★★★</div>
        <h3>{title}</h3>
        <p>사진만 봐도 맛이 느껴지는 곳. 매장 분위기도 좋고 직원분들도 정말 친절했어요.</p>
        <div className="review-author"><span>{author.slice(0, 1)}</span><div><b>{author}</b><small>방금 전</small></div></div>
      </div>
    </article>
  );
}

const faqs = [
  ["전담 매니저는 어떤 일을 도와주나요?", "캠페인 기획부터 참여자 모집, 예약과 일정 관리, 콘텐츠 제출 확인과 결과 정리까지 진행 전반을 함께합니다. 세부 지원 범위는 상담 시 매장 상황에 맞춰 안내해 드립니다."],
  ["30만원으로 어디까지 이용할 수 있나요?", "월 30만원(VAT 별도)으로 계약 기간 내 체험단 캠페인을 횟수 제한 없이 운영할 수 있습니다. 사업자당 1개 매장 기준이며 제공 범위와 이용 조건은 상담을 통해 확정됩니다."],
  ["체험단은 어떻게 진행되나요?", "상담 후 매장에 맞는 채널과 콘텐츠 방향을 정하고 모집을 시작합니다. 참여 확정, 방문, 콘텐츠 제출 순으로 진행되며 모든 현황은 담당 매니저와 함께 확인할 수 있습니다."],
];

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="nav">
        <Logo />
        <nav aria-label="주요 메뉴">
          <a href="#reviews">후기 사례</a>
          <a href="#service">서비스</a>
          <a href="#price">이용 요금</a>
          <a href="#faq">자주 묻는 질문</a>
        </nav>
        <button className="nav-cta" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>무료 상담하기</button>
      </header>

      <section className="hero">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow light>사장님을 위한 무제한 체험단</Eyebrow>
            <h1>체험단, 해야 할 것 같은데<br /><em>비용과 관리가</em><br />부담되셨나요?</h1>
            <p>월 <strong>30만원으로 무제한.</strong><br />전담 매니저와 함께 모집부터 리뷰 확인까지<br />편하게 진행하세요.</p>
            <CTA light />
            <div className="hero-points">
              {["무제한 프로그램", "전담 매니저 배정", "진행 관리 지원"].map((text) => <span key={text}><Icon name="check" />{text}</span>)}
            </div>
          </div>
          <div className="hero-visual">
            <div className="float-pill pill-a"><Icon name="instagram" /><span>인스타그램<br /><b>리뷰 등록 완료</b></span></div>
            <div className="float-pill pill-b"><Icon name="message" /><span>블로그<br /><b>신규 후기 도착</b></span></div>
            <div className="phone">
              <div className="phone-bar"><Logo /><span>•••</span></div>
              <div className="phone-image"><img src={photos[0]} alt="다양한 음식이 놓인 식탁" /><span>어디가게 PICK</span></div>
              <div className="phone-body">
                <div className="phone-stats"><b>오늘 등록된 후기</b><strong>24</strong></div>
                <div className="mini-review"><span>김</span><div><b>여기 진짜 맛집이에요!</b><small>사진도 예쁘게 잘 나와요. 다음에 또 올게요.</small></div></div>
                <div className="mini-review"><span>이</span><div><b>아이와 가기에도 편했어요</b><small>주차도 편하고 직원분도 친절해요.</small></div></div>
              </div>
            </div>
            <div className="social-row"><span className="naver">N</span><Icon name="instagram" /><Icon name="youtube" /><span className="tiktok">♪</span></div>
          </div>
        </div>
        <div className="trust-strip">
          <span>매장 홍보가 달라지는 가장 쉬운 방법</span>
          <div><b>무제한 캠페인</b><i /><b>전담 매니저</b><i /><b>실시간 리뷰 확인</b></div>
        </div>
      </section>

      <section className="section intro">
        <div className="container centered">
          <Eyebrow>리뷰가 매출이 되는 순간</Eyebrow>
          <h2>리뷰 없는 우리 가게,<br />손님이 선택할 <em>이유가 보이나요?</em></h2>
          <p className="lead">맛도 분위기도 자신 있는데,<br />검색한 손님에게 보여줄 후기가 없다면?<br /><strong>우리 가게를 경험한 이야기, 이제 쌓아보세요.</strong></p>
        </div>
        <div className="container compare-wrap">
          <div className="thought-title">손님은 이렇게 생각합니다</div>
          <div className="compare-grid">
            <div className="compare-head muted">후기 없는 가게</div><div className="compare-head positive">후기 있는 가게</div>
            {[
              ["무슨 메뉴가 나오는지 모르겠네…", "사진과 영상으로 보니까 더 먹음직스럽고 믿음이 가!"],
              ["진짜 먹어본 사람 반응이 없네…", "맛에 대한 생생한 묘사와 평가에 신뢰가 생기네!"],
              ["주차는 되나? 아이와 함께 가도 될까?", "주차부터 아이 의자까지 정보가 다 정리되어 있어."],
              ["최근 리뷰가 없는데 망한 거 아니야?", "어제 올라온 생생한 후기 글이 있으니 가 보고 싶어!"],
            ].map(([bad, good], index) => (
              <div className="compare-row" key={bad}>
                <div className="bad"><span>{index + 1}</span>{bad}</div>
                <div className="good"><Icon name="check" />{good}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews-section" id="reviews">
        <div className="container centered">
          <Eyebrow>REAL CONTENTS</Eyebrow>
          <h2>이런 후기가 <em>매일 올라옵니다</em></h2>
          <p className="lead">블로그 · 인스타그램 · 숏폼 · 구매평</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...photos, ...photos].map((photo, index) => <ReviewCard key={`${photo}-${index}`} photo={photo} tag={index % 3 === 0 ? "#블로그" : index % 3 === 1 ? "#인스타그램" : "#숏폼"} title={index % 2 ? "분위기도 맛도 완벽한 저녁" : "또 생각나는 우리 동네 맛집"} author={index % 2 ? "맛있는하루" : "오늘도먹어요"} />)}
          </div>
        </div>
      </section>

      <section className="section worry">
        <div className="container worry-grid">
          <div>
            <Eyebrow light>사장님의 시간을 아껴드려요</Eyebrow>
            <h2>홍보는 신경 쓰이고,<br />직접 챙기기에는<br /><em>일이 많으니까.</em></h2>
          </div>
          <div className="worry-copy">
            <p>주변 가게는 리뷰가 늘어나던데<br />우리 가게 홍보는 어떻게 해야 하나요?</p>
            <p>직접 하자니 챙길 일이 많고,<br />대행 비용은 부담돼 꾸준한 운영을 망설이셨나요?</p>
          </div>
        </div>
        <div className="container task-flow">
          {["모집", "예약", "일정 조율", "리뷰 확인"].map((task, index) => <div key={task}><span>0{index + 1}</span><b>{task}</b>{index < 3 && <Icon name="arrow" />}</div>)}
        </div>
      </section>

      <section className="section manager-section" id="service">
        <div className="container manager-grid">
          <div className="manager-board">
            <div className="board-top"><span>어디가게 매니저</span><b>캠페인 운영 현황</b></div>
            <div className="board-manager"><div className="avatar"><Icon name="manager" /></div><div><small>전담 매니저</small><b>김어디 매니저</b><span><i /> 지금 상담 가능</span></div></div>
            <div className="board-timeline">
              {["캠페인 진행 안내", "참여자 모집 및 일정 관리", "콘텐츠 제출 확인", "결과물 확인 지원"].map((item, index) => <div className={index < 3 ? "done" : ""} key={item}><span>{index < 3 ? <Icon name="check" /> : index + 1}</span><p><b>{item}</b><small>{index < 3 ? "완료되었습니다" : "진행 예정입니다"}</small></p></div>)}
            </div>
          </div>
          <div className="manager-copy">
            <Eyebrow>전담 매니저 배정</Eyebrow>
            <h2>사장님 혼자<br /><em>챙기지 않으셔도 됩니다.</em></h2>
            <p className="lead">처음 시작하는 순간부터 결과물 확인까지,<br />전담 매니저가 진행을 지원합니다.</p>
            <div className="manager-features">
              {[["message", "진행 안내"], ["people", "일정 관리 지원"], ["clip", "콘텐츠 제출 확인"], ["report", "결과물 확인 지원"]].map(([icon, text]) => <div key={text}><Icon name={icon as IconName} /><span>{text}</span></div>)}
            </div>
            <small className="notice">세부 지원 범위는 상담 시 안내됩니다.</small>
          </div>
        </div>
      </section>

      <section className="blue-cta">
        <div className="container">
          <div><Eyebrow light>어디가게 무제한 체험단</Eyebrow><h2>무제한 체험단 <strong>30만원</strong><br />전담 매니저의 진행 지원까지.</h2></div>
          <CTA light>매니저 상담 신청하기</CTA>
        </div>
      </section>

      <section className="section channels">
        <div className="container centered">
          <Eyebrow>ALL CHANNELS</Eyebrow>
          <h2>모든 SNS 채널<br /><em>체험단 진행 가능</em></h2>
          <p className="lead">블로그부터 유튜브·틱톡까지,<br />우리 가게에 맞는 채널로 홍보하세요.</p>
        </div>
        <div className="container channel-grid">
          {[
            ["N", "네이버 블로그", "blog"],
            [<Icon name="instagram" />, "인스타그램", "insta"],
            [<Icon name="youtube" />, "유튜브", "youtube"],
            ["♪", "틱톡", "tiktok"],
            [<Icon name="play" />, "네이버 클립", "clip"],
          ].map(([symbol, name, style]) => <div className={`channel ${style}`} key={name as string}><span>{symbol}</span><b>{name}</b></div>)}
        </div>
        <p className="channel-note">사진과 글, 릴스와 쇼츠까지.<br /><strong>전담 매니저와 우리 가게에 맞는 콘텐츠를 준비하세요.</strong></p>
      </section>

      <section className="section content-types">
        <div className="container">
          <div className="section-top">
            <div><Eyebrow>콘텐츠 맞춤 기획</Eyebrow><h2>대표 메뉴부터 신메뉴까지,<br /><em>우리 가게의 매력을 전하세요.</em></h2></div>
            <p>장점에 맞는 콘텐츠 체험을 상담하세요.<br /><span>#블로그　#인스타그램　#클립　#릴스</span></p>
          </div>
          <div className="content-grid">
            {[
              [photos[1], "01", "대표 메뉴 소개", "우리 가게의 인기 메뉴를 맛있게 소개해보세요."],
              [photos[2], "02", "신메뉴 체험", "새로운 메뉴를 더 많은 분들에게 알려보세요."],
              [photos[3], "03", "매장 분위기 소개", "특별한 공간과 분위기를 리뷰형으로 전달해보세요."],
            ].map(([photo, num, title, description]) => <article className="content-card" key={title}><img src={photo} alt="" /><span>{num}</span><div><h3>{title}</h3><p>{description}</p><Icon name="arrow" /></div></article>)}
          </div>
        </div>
      </section>

      <section className="section dashboard-section">
        <div className="container centered">
          <Eyebrow>한눈에 보는 캠페인</Eyebrow>
          <h2>진행은 매니저와 함께,<br /><em>현황은 한눈에.</em></h2>
          <p className="lead">참여자 정보와 제출 리뷰를 확인하세요.</p>
        </div>
        <div className="container dashboard">
          <aside><Logo /><div className="side-links"><b>캠페인</b><span>참여자 관리</span><span>리뷰 관리</span><span>리포트</span></div><div className="side-help"><Icon name="message" /><b>도움이 필요하신가요?</b><span>매니저에게 문의하기</span></div></aside>
          <div className="dash-main">
            <div className="dash-head"><div><small>서비스 화면 예시</small><h3>캠페인 진행 현황</h3></div><button>새 캠페인 만들기</button></div>
            <div className="stat-grid"><div><span>진행 캠페인</span><b>3</b><small>이번 달</small></div><div><span>전체 참여자</span><b>35</b><small>+12 이번 주</small></div><div><span>제출 리뷰</span><b>28</b><small>80% 완료</small></div></div>
            <div className="campaign-table">
              <div className="table-row table-label"><span>캠페인명</span><span>참여자</span><span>진행 상태</span><span>제출 상태</span><span>확인</span></div>
              {[["대표 메뉴 체험단", "12명", "모집 중", "8 / 12"], ["신메뉴 체험단", "8명", "제출 완료", "8 / 8"], ["매장 분위기 소개", "15명", "참여 확정", "12 / 15"]].map((row, i) => <div className="table-row" key={row[0]}><span><i className={`campaign-icon c${i}`}><Icon name={i === 0 ? "star" : i === 1 ? "play" : "instagram"} /></i><b>{row[0]}</b></span><span>{row[1]}</span><span><em>{row[2]}</em></span><span>{row[3]}</span><span><button>보기</button></span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section price-section" id="price">
        <div className="container price-grid">
          <div className="price-copy">
            <Eyebrow light>합리적인 정액 구독</Eyebrow>
            <h2>리뷰는 꾸준해야 하니까,<br /><em>비용 부담은 절반으로.</em></h2>
            <p>캠페인이 늘어나도 추가 비용 걱정 없이<br />필요한 만큼 진행하세요.</p>
          </div>
          <div className="price-card">
            <div className="price-label">무제한 후기 구독</div>
            <div className="old-price">월 60만원</div>
            <div className="main-price"><span>월</span><b>30</b><strong>만원</strong><small>/ VAT 별도</small></div>
            <div className="price-line" />
            <ul>
              {["'무제한' 후기 체험단", "100건, 1000건 상관없이 무제한 진행", "사진 · 영상 고품질 후기 콘텐츠", "전담 매니저 배정", "진행 안내 · 일정 관리 · 참가자 모집 · 결과물 관리", "실시간 결과 확인", "후기 링크 및 조회수 리포트"].map((item, index) => <li key={item}><Icon name="check" /><span><b>{index === 0 || index === 3 || index === 5 ? item : ""}</b>{index !== 0 && index !== 3 && index !== 5 ? item : ""}</span></li>)}
            </ul>
            <CTA>월 30만원에 무제한 이용하기</CTA>
            <small>*사업자당 1개 매장 이용 / VAT 별도</small>
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="centered"><Eyebrow>이용 방법</Eyebrow><h2>복잡하지 않아요.<br /><em>어디가게가 함께합니다.</em></h2></div>
          <div className="process-grid">
            {[
              ["01", "상담 및 조건 확인", "우리 가게에 맞는 진행 방법을 상담합니다."],
              ["02", "캠페인 준비", "매니저와 함께 참여단을 준비합니다."],
              ["03", "모집 및 체험 진행", "매니저의 진행 지원으로 체험단이 진행됩니다."],
              ["04", "리뷰 확인 및 마무리", "제출된 리뷰를 확인하고 마무리합니다."],
            ].map(([num, title, description], i) => <div className="process-item" key={num}><div><span>{num}</span>{i < 3 && <i />}</div><h3>{title}</h3><p>{description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div><Eyebrow>FAQ</Eyebrow><h2>신청 전<br /><em>궁금한 점을 확인하세요.</em></h2><p>더 궁금한 점은 상담 신청을 남겨주시면<br />전담 매니저가 자세히 안내해 드립니다.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span><b>Q</b>{question}</span><Icon name="chevron" /></button><div className="faq-answer"><p>{answer}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <Eyebrow light>지금 시작하세요</Eyebrow>
            <h2>미뤄왔던<br />우리 가게 홍보,<br /><em>지금 시작하세요.</em></h2>
            <div className="contact-price"><span>무제한</span><strong>30만원</strong></div>
            <p>전담 매니저가 이용 조건과<br />진행 방법을 안내해드립니다.</p>
            <div className="contact-note"><Icon name="message" /><span><b>평균 1시간 이내 답변</b><small>영업일 오전 10시 – 오후 6시</small></span></div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            {sent ? (
              <div className="success"><span><Icon name="check" /></span><h3>상담 신청이 완료되었습니다.</h3><p>남겨주신 연락처로 빠르게 안내해 드릴게요.</p><button type="button" onClick={() => setSent(false)}>새 신청서 작성하기</button></div>
            ) : (
              <>
                <div className="form-head"><span>체험단 상담 신청</span><b>필수 항목을 입력해 주세요.</b></div>
                <div className="field full"><label>회사명 / 브랜드명 / 업체명 <b>필수</b></label><input required placeholder="업체명을 입력해주세요" /></div>
                <div className="field"><label>담당자 성함 <b>필수</b></label><input required placeholder="이름을 입력해주세요" /></div>
                <div className="field"><label>전화번호 <b>필수</b></label><input required type="tel" placeholder="연락 가능한 전화번호" /></div>
                <div className="field"><label>이메일 <span>선택</span></label><input type="email" placeholder="이메일 주소를 입력해주세요" /></div>
                <div className="field"><label>홈페이지 / 플레이스 URL <span>선택</span></label><input type="url" placeholder="매장 소개 페이지 주소" /></div>
                <div className="field full"><label>문의내용 <span>선택</span></label><textarea rows={4} placeholder="궁금한 사항을 남겨주세요" /></div>
                <div className="field full"><label className="agreement"><input type="checkbox" required /><i><Icon name="check" /></i><span>개인정보 수집 및 이용에 동의합니다. (필수)</span><button type="button">내용 보기</button></label></div>
                <button className="form-submit" type="submit">체험단 상담 신청하기 <Icon name="arrow" /></button>
                <small className="form-notice">이용 기간과 무제한 적용 범위는 상담 시 확인해주세요.</small>
              </>
            )}
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-top"><Logo light /><div><a href="#service">서비스 소개</a><a href="#price">이용 요금</a><a href="#faq">자주 묻는 질문</a><a href="#contact">상담 신청</a></div></div>
        <div className="container footer-bottom"><p>어디가게 | 대표 홍길동 | 사업자등록번호 000-00-00000<br />서울특별시 강남구 테헤란로 00 | contact@eodigage.kr</p><p>이용약관　 개인정보처리방침<br />© 2026 어디가게. All rights reserved.</p></div>
      </footer>
    </main>
  );
}
