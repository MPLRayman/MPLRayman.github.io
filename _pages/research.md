---
title: "Research"
layout: default
excerpt: "MPL research fields"
sitemap: false
permalink: /research/
---

<div class="section-layout research-page">
  {% include research-sidebar.html %}
  <div class="section-content">
    <div class="page-hero">
      <p class="page-eyebrow">Research</p>
      <h1>Research Fields</h1>
      <p class="page-lead">Our work connects algorithms, hardware architecture, and real-time implementation across three core fields.</p>
    </div>

<section class="research-field" id="gpu-rendering">
  <div class="research-field-media">
    <img src="{{ '/images/slider/sejong3.png' | relative_url }}" alt="Ray tracing GPU architecture and rendering result">
  </div>
  <div class="research-field-copy">
    <p class="research-number">01 / GPU & Rendering</p>
    <h2>Real-time Ray Tracing and GPU Architecture</h2>
    <p>실시간 Ray Tracing과 Path Tracing을 위한 알고리즘 및 GPU 하드웨어 구조를 연구합니다. 모바일 환경의 전력과 메모리 제약을 고려해 FPGA 구현과 시스템 반도체 설계까지 연결합니다.</p>
    <ul>
      <li>Ray-tracing and path-tracing algorithms</li>
      <li>Low-power mobile GPU architecture</li>
      <li>FPGA implementation and chip design</li>
    </ul>
  </div>
  <div class="research-video-grid">
    <div class="video-frame"><iframe loading="lazy" src="https://www.youtube.com/embed/h_AQ77AicD4?si=_XTByVeXvjnwCfl6" title="Ray-tracing GPU technology" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    <div class="video-frame"><iframe loading="lazy" src="https://www.youtube.com/embed/GpM-S8eVCNs" title="FPGA ray-tracing demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
  </div>
</section>

<section class="research-field" id="on-device-ai">
  <div class="research-field-media">
    <img src="{{ '/images/slider/sejong5.png' | relative_url }}" alt="On-device AI denoising and dehazing research">
  </div>
  <div class="research-field-copy">
    <p class="research-number">02 / On-device AI</p>
    <h2>Real-time AI Software and Hardware</h2>
    <p>Denoising, Dehazing, Speech Enhancement와 같은 경량 AI 모델을 실시간으로 처리하는 소프트웨어와 하드웨어를 함께 설계합니다.</p>
    <ul>
      <li>AI denoising for path-traced images</li>
      <li>Dehazing and defogging for camera systems</li>
      <li>Audio AI and memory-efficient accelerators</li>
    </ul>
  </div>
  <div class="research-video-grid research-video-grid--four">
    <div class="video-frame"><iframe loading="lazy" src="https://www.youtube.com/embed/ItnCp5CjGwo?si=QWgWsiSQwqMLiqR-" title="Real-time AI denoising demo 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    <div class="video-frame"><iframe loading="lazy" src="https://www.youtube.com/embed/RxHUl1sTF5Y?si=v7vM5rYE2flf1Vml" title="Real-time AI denoising demo 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    <div class="video-frame"><iframe loading="lazy" src="https://www.youtube.com/embed/xxd2XIxQL4Y?si=BAdHCckw_ueC21YF" title="Real-time AI dehazing demo 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    <div class="video-frame"><iframe loading="lazy" src="https://www.youtube.com/embed/Yv-fr1wOTtg?si=4BpJ291ouhx-5yhC" title="Real-time AI dehazing demo 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  </div>
</section>

<section class="research-field" id="sound-tracing">
  <div class="research-field-media">
    <img src="{{ '/images/slider/sejong4.png' | relative_url }}" alt="Sound tracing and three-dimensional audio research">
  </div>
  <div class="research-field-copy">
    <p class="research-number">03 / 3D Audio</p>
    <h2>Sound Tracing for Immersive Audio</h2>
    <p>3차원 공간에서 소리의 반사, 회절, 흡수와 전파 경로를 추적해 현실적인 공간 음향을 실시간으로 재현합니다.</p>
    <ul>
      <li>Real-time sound propagation algorithms</li>
      <li>Hardware architecture for spatial audio</li>
      <li>Mobile, XR, and interactive media applications</li>
    </ul>
  </div>
  <div class="research-video-grid">
    <div class="video-frame"><iframe loading="lazy" src="https://www.youtube.com/embed/AOFmVFOSHE8?si=lrmkR3B9mwxGdT-z" title="Sound-tracing technology" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    <div class="video-frame"><iframe loading="lazy" src="https://www.youtube.com/embed/22G3sJWjt3w?si=lB4hc5myOVatA2Gg" title="Sound-tracing real-time processing" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  </div>
</section>

<section class="supporting-research">
  <p class="page-eyebrow">Supporting Research</p>
  <h2>Compression and computer arithmetic</h2>
  <p>Lossless data compression, floating-point arithmetic, and elementary-function hardware support the lab's real-time systems research.</p>
</section>
  </div>
</div>
