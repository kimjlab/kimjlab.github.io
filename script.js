var id = "";
var key = 0;

function addListChild(id, url, index) {
		document.getElementById(id).innerHTML = `
      <div class="ml-4 flex flex-row items-center gap-2 hover:underline">
     	  <li><a href="${url}">${index}</a></li>
      </div>
`;
}

function addListParent(id, url, index) {
		document.getElementById(id).innerHTML = `
   	  <div class="flex flex-row items-baseline gap-2 hover:underline">
				<li><a href="${url}">${index}</a></li>
      </div>
`;
}

function showCareerTable(data) {
		let text = `
              <table class="w-full lg:w-1/2 border-y border-y-teal-500 text-center">
                <thead class="bg-teal-50 border-b border-b-teal-500">
                <tr>
                  <th></th>
                  <th>就職</th>
                  <th>進学</th>
                  <th>その他</th>
                  <th>合計</th>
                </tr>
              </thead>
              <tbody>`;

		for(let i=0; i<data.length; i++) {
                sum = data[i][1] + data[i][2] + data[i][3]
				text += "<tr><th>" + data[i][0] + "年度</th><td>" + data[i][1] + "名</td><td>" + data[i][2] + "名</td><td>" + data[i][3] + "名</td><td>" + sum + "名</td></tr>";
		}
		text += `
                </tbody>
              </table>`;

		document.getElementById("careerTable").innerHTML = text;
}

function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showFooter() {
    var year = new Date().getFullYear();
    document.getElementById("footer").innerHTML = `
      <div class="scroll-to-top" onclick="scrollToTop()">
          <svg class="fixed bottom-6 right-4 text-2xl lg:text-3xl cursor-pointer rounded bg-teal-200 bg-opacity-80" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor" onclick="scrollToTop()">
          <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
      </div>

		<footer>
		  <div class="flex flex-col lg:flex-row text-sm items-center px-6 lg:px-12 py-6 bg-teal-800 text-white">
				<p>©` + year + ` 金鎭赫研究室</p>
				<br>
				<div class="flex flex-col lg:ml-auto lg:items-end items-center">
		      <p>〒432-8011</p>
		      <p>静岡大学情報学部</p>
		      <p>静岡県浜松市中央区城北3-5-1</p>
					<br>
		      <p>学生部屋: 情報学部2号館6階J2601号室</p>
		      <p>教員部屋: 情報学部2号館3階J2311号室</p>
			  </div>
		  </div>
		</footer>
`;
}

//use template tag
function showPageButton(title) {
    const titleStr = title;
    return `<a class="hover:border-b hover:border-teal-600 hover:text-teal-600 hover:font-bold text-teal-600 md:text-black transition-all ease-in-out duration-50" href="/` + titleStr.toLowerCase() + `.html">` + titleStr + `</a>`
    //return `<a class="hover:border-b hover:border-teal-600 hover:text-teal-600 hover:font-bold transition-all ease-in-out duration-50" href="/` + titleStr.toLowerCase() + `.html">` + titleStr + `</a>`
}

function showHeader() {
		document.getElementById("header").innerHTML = `
		<header class="bg-teal-50">
		  <div class="flex flex-col flex-wrap md:flex-row items-center p-5">
            <a class="brand flex flex-col items-center md:items-start" aria-current="page" href="/index.html" exact="">
                <span class="text-sm">静岡大学情報学部行動情報学科</span>
                <span class="text-2xl font-bold tracking-wide">金鎭赫研究室</span>
            </a>
            <div id="menu-toggle" class="lg:hidden ml-auto">
					    <!-svg class="ml-auto text-2xl cursor-pointer" xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></path>
              </svg>
            </div>
	  	  <nav id="nav-menu" class="flex lg:flex lg:flex-row lg:items-center lg:ml-auto space-x-2 lg:space-x-8">` +
          showPageButton("About") +
          showPageButton("News") +
          showPageButton("Laboratory") +
          showPageButton("Publication") +

		  `  </nav>
		  </div>
		</header>
`;
}

function showHeading(id, title) {
		document.getElementById(id).innerHTML = `
      <h3 class="my-6 text-xl lg:text-3xl font-bold">${title}</h3>`;
}

function showHeadingLarge(id, title) {
		document.getElementById(id).innerHTML = `
      <h3 class="my-6 text-2xl lg:text-4xl font-bold">${title}</h3>`;
}

function showImgAndSentence(id, rowOrder, title, explanation, imgName) {
		document.getElementById(id).innerHTML = `
      <h2 class="py-6 text-2xl lg:text-4xl font-bold">${title}</h2>
      <div class="flex flex-col lg:` + rowOrder + `">
        <img src="img/` + imgName + `" class="h-auto lg:h-64 lg:mx-6 object-contain lg:object-cover rounded">
        <p class="my-6">` + explanation + `</p>
      </div>
`;
}

function createProfile(person) {
  return `<div class="lg:h-28 flex flex-col lg:flex-row gap-4 items-center odd:bg-teal-50 lg:odd:bg-inherit p-4 lg:p-0 rounded">
					<img src="img/member/${person.img}.jpg" onerror="this.src='https://placehold.jp/eeeeee/000000/150x150.png?text=Image'"  class="w-24 lg:w-28 h-24 lg:h-28 object-cover rounded-full lg:rounded">
			    <div class="flex flex-col gap-2 items-center lg:items-start">
      			<div class="flex flex-col items-center lg:flex-row gap-2">
			        <p class="text-xl font-semibold">${person.name}</p>
      			  <p class="lg:self-end">${person.belonging}</p>
			      </div>
      			<p>研究テーマ: <b>${person.theme}</b></p>
			      <p class="text-sm">趣味: ${person.message}</p>
			    </div>
	       </div>`;
  
}

function populateSection(id, members) {
  const section = document.getElementById(id);
  members.forEach(member => {
    section.innerHTML += createProfile(member);
  });
}


function showCurrentMembers() {
    fetch('members.json')
      .then(response => response.json())
      .then(data => {
        const students = data.body;

    populateSection("graduate", students.graduate);
    populateSection("bachelor", students.bachelor);

      })
      .catch(error => console.error('Error loading JSON:', error));
}

function createNews(key, img, dateStr, title, description) {
				document.getElementById("news").innerHTML += `
			  <a href="news.html?page=${key}" class="flex flex-col md:flex-row gap-4 rounded hover:bg-slate-300 hover:bg-opacity-50 transition-all ease-in-out duration-150">
	 			<img class="w-full md:w-40 h-28 md:h-auto object-cover rounded-t md:rounded-tr-none md:rounded-l" src="img/${img}.jpg">
		    <div class="px-4 pb-4 md:p-4 w-full">
		      <div class="flex flex-col-reverse">
		        <div class="text-lg lg:text-2xl font-bold">${title}</div>
			        <span class="text-sm text-slate-600">${dateStr}</span>
				    </div>
				    <p class="pt-2">${description}</p>
				  </div>
				  </a>`;
}

function addRow(df, key, img, dateStr, title, description) {
  df.push({key, img, dateStr, title, description});
}

function getBasePath() {
  const url = window.location.toString();
  if (url.includes('localhost')) {
    return "news/";
  } else {
    const urlWithoutProtocol = url.replace(/^(https?:\/\/)/, '');
    const subdomain = urlWithoutProtocol.split('.')[0];
    return "https://raw.githubusercontent.com/" + subdomain + "/" + subdomain + ".github.io/main/news/"
  }
}

function createEntireNews(pages, count = Object.keys(pages).length) {
  let basePath = getBasePath();
  let df = [];
  let title = '';
  let description = '';
  let dateStr = '';
  let img = '';
  
  for (const [key, path] of Object.entries(pages)) {
    fetch(basePath + path)
    .then(res => res.text())
    .then(markdown => {
      const allContents = markdown
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />')
        .replace(/\n$/gim, '<br />');

      const lines = allContents.split(/\r?\n/);
      
      for (const line of lines) {
        if (line.toLowerCase().startsWith("title:")) {
          title = line.split("title:")[1].trim();
        }
        if (line.toLowerCase().startsWith("description:")) {
          description = line.split("description:")[1].trim();
        }
        if (line.toLowerCase().startsWith("date:")) {
          dateStr = line.split("date:")[1].trim();
        }
        if (line.toLowerCase().startsWith("img:")) {
          img = line.split("img:")[1].trim();
        } else {
          img = "lab"
        }
      }
      addRow(df, key, img, dateStr, title, description)
  
      if (df.length === Object.keys(pages).length) {
        df.sort((a, b) => new Date(b.dateStr) - new Date(a.dateStr));
        df.slice(0, count).forEach(news => {
          createNews(news.key, news.img, news.dateStr, news.title, news.description);
        });
      }
    })
  }
}

function showNews(count) {
		if(count == undefined) {
				count = news.length;
		}

		for(let i=0;i<count;i++) {
				document.getElementById("news").innerHTML += `
			<div class="mb-4">
			  <a href="news.html?page=` + news[i][0] + `" class="flex flex-col md:flex-row md:h-28 gap-4 rounded hover:bg-slate-300 hover:bg-opacity-50 transition-all ease-in-out duration-150">
	 			<img class="w-full md:w-40 h-28 md:h-auto object-cover rounded-t md:rounded-tr-none md:rounded-l" src="img/lab.jpg">
		    <div class="px-4 pb-4 md:p-4 w-full">
		      <div class="flex flex-col-reverse">
		        <div class="text-lg lg:text-2xl font-bold">` + news[i][1] + `</div>
			        <span class="text-sm text-slate-600">` + news[i][2] + `</span>
				      </div>
				      <p class="pt-2">` + news[i][3] + `</p>
				    </div>
					  </a>
					</div>`;
		}
}

function showNewsHeading(title, dateStr, contents) {
		document.getElementById("news").innerHTML = `
      <div class="mb-4 flex flex-row space-x-4 items-center text-sm lg:text-base">
        <a href="../news.html">News</a>
        <span>/</span>
        <span class="text-slate-300">${title}</span>
      </div>
      <div>
        <div class="flex flex-col space-y-2 mb-6 lg:mb-12">
          <h1 class="text-3xl lg:text-5xl font-bold tracking-wide">${title}</h1>
          <span class="flex flex-row items-center gap-2 ml-auto text-xs">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12h5v5h-5v-5m7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5h14M5 19V9h14v10H5Z"/></svg>
${dateStr}</span>
        </div>

        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-20">
          <div class="lg:col-start-1 lg:col-end-9">
				${contents}
	        </div>
        </div>
      </div>
`;
}

function showResearch(id, imgName, title, description) {
		document.getElementById(id).innerHTML = `
      <div class="flex flex-col bg-white rounded shadow">
	      <img class="w-full h-32 object-cover rounded-t" src="img/` + imgName + `">
    	  <div class="flex flex-col p-4 w-full h-full">
      	  <h3 class="text-xl lg:text-3xl font-bold">${title}</h3>
  
        	<p class="pt-4 mt-auto">${description}</p>
	      </div>
      </div>
		`;
}

function showScheduleTable(id, duration, contents) {
		let text = `
	        <h4 class="mb-4 text-lg lg:text-2xl font-bold">` + duration + `の予定</h4>
          <table class="w-full border-y border-y-teal-500 text-center">
            <tbody>`;

		for(let i=0; i<contents.length; i++) {
				text += "<tr><th class=\"w-1/4\">" + contents[i][0] + "</th><td class=\"w-auto\">" + contents[i][1] + "</td></tr>";
		}
		text +=`
                </tbody>
            </table>`;

		document.getElementById(id).innerHTML = text;
}

function showTextContent(id, title, sentence) {
		document.getElementById(id).innerHTML = `
      <h3 class="my-6 text-xl lg:text-3xl font-bold">${title}</h3>
      <div class="mb-3">
        <p>` + sentence + `</p>
      </div>
`;
}

function createThesisTable() {
            fetch('members.json') 
            .then(response => response.json())
            .then(members => {
                let tableContent = '';

                members.body.graduated.forEach(schoolYear => {
		              tableContent += `
                <h5 class="my-3 text-base lg:text-xl font-bold">` + schoolYear.year + `年度卒業</h5>
                <table class="w-full border-y border-y-teal-500 text-center">
                  <thead class="bg-teal-50 border-b border-b-teal-500">
                    <tr>
                      <th class="lg:w-1/4">名前</th>
                      <th class="lg:w-1/6">学位</th>
                      <th class="lg:w-auto">研究テーマ</th>
                    </tr>
                  </thead>
                  <tbody>`;
                  
                  schoolYear.member.forEach(member => {
		                tableContent += `
                      <tr>
                        <th class="w-1/4">${member.name}</th>
                        <td class="w-1/6">${member.belonging}</td>
                        <td class="w-auto">${member.theme}</td>
                      </tr>
                    `;
                  });
		              tableContent += `
                  </tbody>
                </table>`;
                });
                
		            document.getElementById("thesis").innerHTML = tableContent;
            })
            .catch(error => console.error('Error:', error));

}

function showTitle(title, explanation, imgName) {
		document.getElementById("title").innerHTML = `
      <div class="relative h-40 lg:h-80">
        <div class="bg-teal-100 absolute h-full w-full z-10 bg-opacity-5 top-0 font-bold">
          <div class="px-6 md:px-12 lg:px-0 lg:w-9/12 py-6 lg:py-12 m-auto h-full flex flex-col justify-center">
            <h1 class="text-3xl lg:text-5xl font-bold capitalize">${title}</h1>
            <p class="pt-3 lg:pt-6">${explanation}</p>
          </div>
        </div>
        <img src="img/${imgName}.jpg" alt="imageAlt" class="w-full h-40 lg:h-80 object-cover opacity-25">
      </div>`;
}
