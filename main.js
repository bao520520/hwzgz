// 页面加载默认显示“海外音乐”区域
document.addEventListener("DOMContentLoaded", function () {
    showSection('overseasMusic');
});

// 显示指定内容区域，隐藏其他区域
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// 搜索音乐（海外或中国）
function searchMusic(inputId, folder) {
    const query = document.getElementById(inputId).value.toLowerCase();
    const resultList = document.getElementById(`${folder}MusicList`);
    resultList.innerHTML = ''; // 清空结果

    fetchFiles(folder).then(files => {
        const filtered = files.filter(file => file.toLowerCase().includes(query));
        displayFiles(filtered, resultList, folder);
    });
}

// 搜索海外视频音乐
function searchVideo(inputId, folder) {
    const query = document.getElementById(inputId).value.toLowerCase();
    const resultList = document.getElementById(`${folder}VideoList`);
    resultList.innerHTML = ''; // 清空结果

    fetchFiles(folder).then(files => {
        const filtered = files.filter(file => file.toLowerCase().includes(query));
        displayFiles(filtered, resultList, folder);
    });
}

// 模拟后端文件读取（实际项目中请使用 AJAX 请求服务端接口）
function fetchFiles(folder) {
    return new Promise((resolve) => {
        const fileLists = {
            abroad: [
                "Céline Dion-I Love You.mp3",
                "Dawb Yaj Nco Niam Txiv Lub Taw Rooj Cuav Zos.mp3",
                "ib ob peb.mp3",
                "los seev cev-Douachi Yang-Viv Ncaus Koom Siab.mp3",
                "koj puas paub mob kuv siab.mp3",
                "Lemon Tree-Fool's_Garden.mp3",
                "Niam txoj kev hlub.mp3",
                "Nkauj Noog hawj-Yog Ntuj Tsis Tig.mp3",
                "Nkauj See Zaj Dab Neeg-Yasmi.mp3",
                "Seasons in the Sun-Westlife.mp3",
                "Take Me Hand-DAISHI_DANCE_Cécile_Corbel.mp3",
                "Vim kuv hlub koj-Maiv Neeb Thoj.mp3",
                "Yog hmoov dab tsi-Gao Nou Kue ft.Mang Vang.mp3",
                "เพลงใหม่ลาหู่.mp3",
                "แม่น้องบ่อมัก-สะหง่า-เชียงเหมอ.mp3",
                "มีนาคม ค.ศ.mp3",
                "สาวแหล่บ้านนา-หนิง ปัทมา.mp3",
                "หนุ่มนาข้าวสาวนาเกลือ-ลุงชาย-ฟิวส์.mp3",
                "ຄິດຮອດສາວນ້ຳບາກ-ແຈ໋ກ-ສາຍນ້ຳມອງ-คิดฮ.mp3",
                "ສາວຊຽງຂວາງ-สาวเชียงขวาง-ຕິ່ງໜ່ອຍ-ພອ.mp3",
                "ສາວບໍ່ແກ້ວ-ແສງດາວວີ-สาวบ่อแก้ว.mp3",
                "ທົ່ງນາແຊງບ້ານນ້ອງ-ท่งนาแชงบ้านน้อ.mp3",
                "ມົນຮັກສາວລ່ອງແຈ້ງ.mp3",
                "ຢາກໃຫ້ໂລກຍິ້ມ.mp3",
                "ລຳຕັ່ງຫວາຍ-ลำตั่งหวาย-ໄນທ໌ ເອລດີ່.mp3",
                "ເຂົ້າໜຽວສຽງແຄນ-ຕິ່ງໜ່ອຍ-ພອຍໄພລີນ.mp3",
                "ເຕືອນສາວໄວ້ລຸ້ນ.mp3",
                "ເພງ-ຮັກບໍ່ກ້າບອກ-ฮักบ่อก้าบอก-ດ້ວ.mp3",
                "ແຟນປັດຈຸບັນສຳຄັນສ່ຳໃດ-แฟนปัจจุบัน.mp3",
                "ໄຕດຳລຳພັນ-ไตดำลำพัน-ເລັກ ສະໄມພອນ.mp3",
                "歌剧2-Opera-Vitas.mp3",
                "江南style-PSY-GANGNAM STYLE(강남스타일).mp3",
                "清新的小女孩-July_Tun.mp3",
                "星星-Звезда-Vitas.mp3",
                "因为爱你伴奏.mp3",
                "又是一年冬天-酸奶草莓.mp3"
            ],
            abroad_video: [
                "Sib Hawm Dhau (Time Passed) Music Video by： Deeda⧸Dib Xwb.mp4",
                "thaum twm mam tseg txoj kev haus npias tsom xyooj nkauj tawm tshiab 2023.mp4",
                "Vim Kuv Hlub Koj  Cover By  Sua Vaj  Lyrics.mp4",
                "Ua Nej Ntxhais Tsi Yooj Yim-SuabNkaujHmoob.mp4",
                "Yasmi-Nkauj See Zaj Dab Neeg.mp4",
                "ສະເໜ່ພາກເໜືອ⧸ສະເຫນ່ພາກເຫນືອ⧸ດວງຕາ ຖ.mp4",
                "ແຟນປັດຈຸບັນສຳຄັນສ່ຳໃດ MV แฟนปัจจุบันสำคัณส่ำใด ຄົມ ຊະນະ คม ชะนะ [Official Video].mkv",
                "Yasmi - Nkauj See Zaj Dab Neeg.mp4"
            ],
            china: [
                "2002年的第一场雪-刀郎.mp3",
                "hold不住的爱-龙梅子.mp3",
                "暗里着迷-刘德华.mp3",
                "不如见一面-海来阿木.mp3",
                "曾经的你-许巍.mp3",
                "冲动的惩罚-刀郎.mp3",
                "稻香-周杰伦.mp3",
                "点歌的人-海来阿木.mp3",
                "多想在平庸的生活拥抱你-隔壁老樊.mp3",
                "光年之外-邓紫棋.mp3",
                "可不可以-张紫豪.mp3",
                "可能-程响.mp3",
                "来跳舞-海来阿卓.mp3",
                "罗刹海市-刀郎.mp3",
                "麻雀-李榮浩.mp3",
                "芒种-音阙诗听-赵方婧.mp3",
                "你的答案-阿冗.mp3",
                "你的万水千山-海来阿木.mp3",
                "你笑起来真好看-李昕融.mp3",
                "起风了-买辣椒也用券.mp3",
                "桥边姑娘-海伦.mp3",
                "情人-Beyond.mp3",
                "情人-刀郎.mp3",
                "去年夏天-王大毛.mp3",
                "三生三幸-海来阿木.mp3",
                "世界这么大还是遇见你-程响.mp3",
                "世大还是遇见你-李悟小礼物.mp3",
                "太阳-澪恩.mp3",
                "西海情歌-刀郎.mp3",
                "西楼儿女-海来阿木.mp3",
                "想把我唱给你听-老狼_王婧.mp3",
                "新华的天空-新华教育.mp3",
                "夜曲-周杰伦.mp3",
                "一起走过的日子-刘德华.mp3",
                "早安隆回-袁树雄.mp3"
            ],
            china_video:[
                "2002年的第一场雪-刀郎.mp4",
                "麻雀-李榮浩.mp4",
                "情人-Beyond.mp4",
                "情人-刀郎.mp4"
            

            ],
            cosmetics:[
                "1.jpg",
                "2.jpg",
                "3.jpg",
                "4.jpg"
            ]
        };

        setTimeout(() => resolve(fileLists[folder] || []), 200);
    });
}

// 显示音频或视频播放器
function displayFiles(files, listElement, folder) {
    if (files.length === 0) {
        listElement.innerHTML = '<li>没有找到符合条件的结果</li>';
        return;
    }

    files.forEach(file => {
        const listItem = document.createElement('li');
        const title = document.createElement('p');
        title.textContent = file.split('.')[0]; // 文件名

        const ext = file.split('.').pop().toLowerCase();
        const filePath = `${folder}/${file}`;

        if (ext === 'mp3') {
            const audio = document.createElement('audio');
            audio.controls = true;
            audio.src = filePath;
            listItem.appendChild(title);
            listItem.appendChild(audio);
        } else if (ext === 'mp4') {
            const video = document.createElement('video');
            video.controls = true;
            video.width = 320;
            video.src = filePath;
            listItem.appendChild(title);
            listItem.appendChild(video);
        }

        listElement.appendChild(listItem);
    });
}
