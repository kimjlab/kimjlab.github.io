<script setup lang="ts">
useHead({
  title: 'Laboratory'
})
const student = await useAsyncData('members', () => queryContent('members').only(['body']).find())
const schedule = await useAsyncData('schedule', () => queryContent('schedule').only(['body']).findOne())
</script>
<template>
  <div>
    <UtilitiesPagetitle title="laboratory" image="lab-3">
      研究室の様子をご紹介します。
    </UtilitiesPagetitle>
    <UtilitiesPageContainer>
      <div>
        <p>週1回のゼミで研究の進捗報告や論文紹介、勉強会を行います。</p>
        <p>半期に1回以上はゼミで発表することにしています。</p>
        <p>本研究室にはコアタイムはありません。各自が自由な時間・場所で自分の裁量で研究を進めています。</p>
      </div>
      <div>
        <h2 class="mb-6 text-2xl lg:text-4xl font-bold">研究メンバー</h2>
        <div class="mb-6 flex flex-col">
          <h3 class="mb-6 text-xl lg:text-3xl font-bold">指導教員</h3>
          <div class="m-auto flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
            <img src="/img/member/kimj.jpg" alt="" class="w-36 h-36 object-cover rounded-full lg:rounded">
            <div class="flex flex-col gap-2">
              <p class="text-xl lg:text-2xl font-semibold">金鎭赫（キム・ジンヒョク）</p>
              <p>准教授</p>
              <p>趣味: Netflix、コーヒー</p>
              <nuxt-link to="https://tdb.shizuoka.ac.jp/RDB/public/Default2.aspx?id=11275&l=0" target="_blank"
                class="underline">
                <Icon name="mdi:launch" size="16" />教員データベース
              </nuxt-link>
            </div>
          </div>
        </div>
        <div>
          <h3 class="mb-6 text-xl lg:text-3xl font-bold">学生</h3>
          <div class="mb-3">
            <p>本研究室は2020年度にスタートした新しい研究室です。個性豊かなメンバーが集まっています。</p>
            <p>2023年4月時点で、修士2年生が3名、学部4年生が4名、学部3年生が1名（留学中）の計8名が所属しています。</p>
          </div>
          <div class="space-y-6">
            <div>
              <h4 class="mb-6 text-lg lg:text-2xl font-bold">大学院生</h4>
              <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 gap-y-4 lg:gap-y-8">
                <MemberCard v-for="g in student.data.value[0].body.graduate" :data="g" />
              </div>
            </div>
            <div>
              <h4 class="mb-6 text-lg lg:text-2xl font-bold">学部生</h4>
              <div class="grid lg:grid-cols-2 gap-x-4 gap-y-8">
                <MemberCard v-for="b in student.data.value[0].body.bachelor" :data="b" />
              </div>
            </div>
            <div class="space-y-6">
              <h4 class="text-lg lg:text-2xl font-bold">卒業生</h4>
              <p>2023年4月時点で、計10名（うち、2人は大学院在籍中）が本研究室から卒業しました。</p>
              <span class="block text-sm">*: 留学生（9月卒業）</span>
              <div v-for="(s, i) in student.data.value[0].body.graduated">
                <h5 class="mb-3 text-base lg:text-xl font-bold">{{ s.year }}年度卒業（第{{ i + 1 }}期生）</h5>
                <table class="w-full border-y border-y-teal-300 text-center">
                  <thead class="bg-teal-50 border-b border-b-teal-300">
                    <tr>
                      <th class="lg:w-1/4">名前</th>
                      <th class="lg:w-1/6">学位</th>
                      <th class="lg:w-auto">研究テーマ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <MemberCard v-for="m in s.member" :data="m" :isGraduated="true" />
                  </tbody>
                </table>
              </div>
            </div>
            <div class="space-y-6">
              <h4 class="text-lg lg:text-2xl font-bold">卒業後の進路</h4>
              <div>
                <p>本研究室では、卒業後の進路について学生個人の意志が尊重されます。したがって、大学院進学を強制することは決してありません。大学院進学（内部・外部進学問わず）でも就職でも、できる限りのサポートはします。</p>
              </div>
              <div>
                <p>就職先として、これまでに情報通信系の企業を中心に様々な分野で卒業生が活躍しています。</p>
                <p>大学院進学先は、静岡大学大学院が2名となっています。</p>
              </div>
              <table class="w-full lg:w-1/2 border-y border-y-teal-300 text-center">
                <thead class="bg-teal-50 border-b border-b-teal-300">
                  <tr>
                    <th></th>
                    <th>就職</th>
                    <th>進学</th>
                    <th>その他</th>
                    <th>合計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>2021年度</th>
                    <td>3名</td>
                    <td>2名</td>
                    <td>1名</td>
                    <td>6名</td>
                  </tr>
                  <tr>
                    <th>2022年度</th>
                    <td>4名</td>
                    <td>0名</td>
                    <td>0名</td>
                    <td>4名</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="mb-6 text-2xl lg:text-4xl font-bold">学生部屋</h2>
        <p>情報学部2号館6階J2601が本研究室の学生部屋です。まだ新しい研究室なので、設置してある物は少なめですがその分きれいです。</p>
        <div class="mt-4 grid lg:grid-cols-2 gap-4">
          <img src="/img/lab.jpg" alt="" class="h-32 lg:h-64 w-full object-cover rounded">
          <img src="/img/lab-3.jpg" alt="" class="h-32 lg:h-64 w-full object-cover rounded">
          <img src="/img/lab-4.jpg" alt="" class="h-32 lg:h-64 w-full object-cover rounded">
          <img src="/img/lab-5.jpg" alt="" class="h-32 lg:h-64 w-full object-cover rounded">
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl lg:text-4xl font-bold">活動内容</h2>
        <div>
          <p>コアタイムはありません。最低限、毎週のゼミ（90分）に参加することが求められます。ゼミ以外の時間では、各自の裁量で研究活動を行っていきます。</p>
        </div>
        <h3 class="text-xl lg:text-3xl font-bold">研究テーマについて</h3>
        <div>
          <p>4年生の夏休み頃までにはある程度の研究テーマの構想を考え、先生と相談しブラッシュアップさせていきます。研究テーマは、「健康・ヘルスケア」と「情報学」や「統計学」に関連したものが望ましいですが、学生の興味関心に合わせて先生と相談しながら決めていきます。学部4年生は、ゼミにて4月から5月にかけて論文紹介を行いますが、そこではその時点での自身の興味関心のある研究テーマにできるだけ沿った論文を紹介することを推奨しています。</p>
          <p>例年11月頃に卒論の中間発表が行われるため、10月はゼミで研究の進捗などを報告します。</p>
        </div>
        <h3 class="text-xl lg:text-3xl font-bold">ゼミについて</h3>
        <div>
          <p>全体ゼミでは、論文紹介や統計学に関連した書籍の勉強会を行っています。</p>
          <p>半期に1回以上、自分の興味関心や研究テーマに応じた論文を紹介します。紹介する論文は、原則として自分で調査して決めますが、英語論文のものを推奨しています。このような発表を行うことや英語論文を読む能力をつけることは、卒論や修論を進める際に重要であると考えており、ゼミ内で実施しています。</p>
          <p>統計の勉強会では、書籍を輪読し卒論で使う基本的な統計処理を一通り理解することを目的に行っています。</p>
        </div>
        <h3 class="text-xl lg:text-3xl font-bold">スケジュール</h3>
        <div>
          <p>以下のスケジュール以外にも、学生が自主的にイベントや勉強会を自由に行うことができます。また、ゼミ以外の時間でも適宜、先生と個人ミーティングを行い、研究や生活で困っていることなどを相談します。</p>
        </div>
        <div class="space-y-4">
          <div v-for="s in schedule.data.value.body">
            <h4 class="mb-4 text-lg lg:text-2xl font-bold">{{ s.type }}の予定</h4>
            <table class="w-full lg:w-1/2 border-y border-y-teal-300 text-center">
              <tbody>
                <tr v-for="i in s.items">
                  <th class="w-1/4">{{ i.time }}</th>
                  <td class="w-auto">{{ i.content }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </UtilitiesPageContainer>
  </div>
</template>