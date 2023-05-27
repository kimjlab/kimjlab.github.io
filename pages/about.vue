<script setup lang="ts">
useHead({
  title: 'About'
})
</script>
<template>
  <div>
    <UtilitiesPagetitle title="about" image="lab-4">
      わたしたちの研究についてご紹介します。
    </UtilitiesPagetitle>
    <UtilitiesPageContainer>
      <div>
        <p>日常生活下調査（Ecological Momentary Assessment；EMA）は、日常生活下でその瞬間の事象を一日数回反復的に記録することにより、行動や気分などを把握できる妥当な方法とされています。近年、情報通信技術（ICT）の進歩とともにスマートフォンやウェアラブルデバイスの発展によりEMAを用いたデータ収集方法に画期的な変化が起きています。また、スマートフォンを介して、健康に否定的な影響を与える要因や異常を検知した時に適切な行動の誘導や効果的な情報を提示することで、行動変容や治療などの介入を行うJust-in-Time Adaptive Intervention（JITAI）と呼ばれる手法があります。今後、これらの手法を用いたモバイルヘルスシステムを構築し、その運用と検証を行います。</p>
      </div>
      <div>
        <h2 class="mb-6 text-2xl lg:text-4xl font-bold">日常生活下の多次元健康情報の取得</h2>
        <div class="flex flex-col lg:flex-row gap-8">
          <img src="/img/research-1.jpg" alt="" class="h-32 lg:h-64 object-contain lg:object-cover rounded">
          <p class="my-auto">従来研究では質問紙による定点的調査が主であるのに対し、スマートフォンやウェアラブルデバイスを用いたEMA計測により、日常生活下での自覚症状や行動的変調、生理的反応の個人内（縦断的）変化を実時間で問診、記録し、諸要因の関係性を総合的に検討します。さらに、様々な生理的指標や社会環境的要因のデータを考慮することで、健康関連行動や精神疾患の予防について多角的に考察・検証します。</p>
        </div>
      </div>
      <div>
        <h2 class="mb-6 text-2xl lg:text-4xl font-bold">日常の生活習慣行動及び健康リスクのメカニズムの解明と介入</h2>
        <div class="flex flex-col lg:flex-row-reverse gap-8">
          <img src="/img/research-2.jpg" alt="" class="h-32 lg:h-64 object-contain lg:object-cover rounded">
          <p class="my-auto">モバイル技術を組み合わせたモバイルヘルス（m-Health）システムの成功のためには機能的で安定的なシステムの構築以外に、そのシステムで収集可能な多次元データからいかにして健康関連情報を引き出すかという方法論が必要となります。さらに、健康関連行動やそれに関連する要因は相互作用しながら変化するという動的側面の観点に立脚すれば、常時見守り型の健康モニタリングシステムが異常を検知した場合、ジャストインタイム適応型といった新たなアプローチも考えられます。最新のデータ解析・モデリングを行い、生活習慣行動や健康リスクのメカニズムを解明するとともに客観的・定量的に行う新たな介入手法を提案し、その有効性の実証を試みる研究を行います。</p>
        </div>
      </div>
      <div>
        <h2 class="mb-6 text-2xl lg:text-4xl font-bold">モバイルヘルスシステムの構築</h2>
        <div class="flex flex-col lg:flex-row gap-8">
          <img src="/img/research-3.jpg" alt="" class="h-32 lg:h-64 object-contain lg:object-cover rounded">
          <p class="my-auto">日常生活下での多次元健康情報の計測・介入を統合するモバイルヘルスシステムを構築し、その実質的な運用を検討・実証します。安全で標準化されたシステムを構築し、今後はデータ収集・解析、介入を行う研究や臨床現場をサポートする利便性・再現性の高い研究プラットフォームを提案します。</p>
        </div>
      </div>
    </UtilitiesPageContainer>
  </div>
</template>