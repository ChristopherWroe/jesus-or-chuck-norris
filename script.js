    const data = [
            {
                "quote": "As the Father has loved Me, so have I loved you",
                "verse": "John 15:9-17 (NIV)",
                "image_jc": "https://assetsnffrgf-a.akamaihd.net/assets/m/502012495/univ/art/502012495_univ_sqr_xl.jpg",
                 "image_cn": "https://pbs.twimg.com/profile_images/1407346896/89_400x400.jpg",
                "link": "https://www.desiringgod.org/messages/as-i-have-loved-you-love-one-another"
            },
            {
                "quote": "Do not let your hearts be troubled. You believe in God; believe also in me.",
                "verse": "John 14:1-4 (NIV)",
                "image_jc": "https://assetsnffrgf-a.akamaihd.net/assets/m/502012495/univ/art/502012495_univ_sqr_xl.jpg",
                "image_cn": "https://s3.amazonaws.com/mf-cnorris/assets/uploads/2016/10/19123509/timeline-05.jpg",
                "link": "https://www.desiringgod.org/articles/let-not-your-hearts-be-troubled"
            },
            {
                "quote": "Then you will know the truth, And the truth will set you free.",
                "verse": "John 8:29-38 (NIV)",
                "image_jc": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cefal%C3%B9_Pantocrator_retouched.jpg/220px-Cefal%C3%B9_Pantocrator_retouched.jpg",
                "image_cn": "https://i.kym-cdn.com/photos/images/original/000/356/479/49e.jpg",
                "link": "https://www.desiringgod.org/messages/you-will-know-the-truth-and-the-truth-will-set-you-free"
            },
            {
                "quote": "For those who exalt themselves will be humbled, and those who humble themselves will be exalted.",
                "verse": "Matthew 23:1-11 (NIV)",
                "image_jc": "https://assetsnffrgf-a.akamaihd.net/assets/m/502014285/univ/art/502014285_univ_sqr_xl.jpg",
                "image_cn": "https://vignette.wikia.nocookie.net/deadliestjokes/images/e/eb/Chuck_norris.jpg/revision/latest?cb=20110705200513",
                "link": "https://www.desiringgod.org/articles/what-is-humility"
            },
            {
                "quote": "I am the way and the truth and the life. No one comes to the Father except through me.",
                "verse": "John 14:1-6 (NIV)",
                "image_jc": "https://assetsnffrgf-a.akamaihd.net/assets/m/502014285/univ/art/502014285_univ_sqr_xl.jpg",
                "image_cn": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjvlcOPkv4AJvsKEGWU_oWYXkvyxrXKyrMI0g9V1LcugHuThh",
                "link": "https://www.desiringgod.org/messages/i-am-the-way-the-truth-and-the-life"
            },
            {
                "quote": "Violence is my last option",
                "verse": "Chuck Norris!",
                "image_jc": "https://assetsnffrgf-a.akamaihd.net/assets/m/502012495/univ/art/502012495_univ_sqr_xl.jpg",
                "image_cn": "https://pbs.twimg.com/profile_images/1407346896/89_400x400.jpg",
                "link": "Chuck Norris doesn't need links!"
            },   
            {
            "quote": "Men are like steel. When they lose their temper, they lose their worth",
            "verse": "Chuck Norris!",
            "image_jc": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cefal%C3%B9_Pantocrator_retouched.jpg/220px-Cefal%C3%B9_Pantocrator_retouched.jpg",
            "image_cn": "https://s3.amazonaws.com/mf-cnorris/assets/uploads/2016/10/19123509/timeline-05.jpg",
            "link": "Chuck Norris doesn't need links!"
            },
            {
            "quote": "I don't initiate violence, I retaliate.",
            "verse": "Chuck Norris!",
            "image_jc": "https://assetsnffrgf-a.akamaihd.net/assets/m/502012495/univ/art/502012495_univ_sqr_xl.jpg",
            "image_cn": "https://i.kym-cdn.com/photos/images/original/000/356/479/49e.jpg",
            "link": "Chuck Norris doesn't need links!"
            },      

            {
            "quote": "Good morals lead to good laws",
            "verse": "Chuck Norris!",
            "image_jc": "https://assetsnffrgf-a.akamaihd.net/assets/m/502014285/univ/art/502014285_univ_sqr_xl.jpg",
            "image_cn": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjvlcOPkv4AJvsKEGWU_oWYXkvyxrXKyrMI0g9V1LcugHuThh",
            "link": "Chuck Norris doesn't need links!"
            },
        
        {
            "quote":"I'm a very religious person",
            "verse": "Chuck Norris!",
            "image_jc": "https://assetsnffrgf-a.akamaihd.net/assets/m/502014285/univ/art/502014285_univ_sqr_xl.jpg",
            "image_cn": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjvlcOPkv4AJvsKEGWU_oWYXkvyxrXKyrMI0g9V1LcugHuThh",
            "link": "Chuck Norris doesn't need links!"
        }]



            
            let current_num = 100
            let a = 100
            
            function jesus() {
                if (current_num >= 5)
                {
                document.querySelector(".js-details-section").innerText = "Try Again"
                }
                else 
                {
                document.querySelector(".js-details-section").innerText = data[a].verse
                document.querySelector(".link-section").innerHTML = `
                <a target="_blank" href ="${data[a].link}">more information</a>`

                toggleButton()
                }
              }

            function chucknorris() {
               if (current_num < 5) {
                     document.querySelector(".js-details-section").innerText = "Try Again"
                }
                else {
                    document.querySelector(".js-details-section").innerText = data[a].verse
                    toggleButton()
                }
            }

            function refreshQuote(){
                document.querySelector(".js-details-section").innerText = ""
                document.querySelector(".link-section").innerHTML = ""
                document.querySelector(".footer-btn-img-1").src = data[a].image_jc
                document.querySelector(".footer-btn-img-2").src = data[a].image_cn
                a = Math.floor(Math.random()*10)
                if(current_num === a) {refreshQuote()} 
                else {
                toggleButton()
                document.querySelector(".js-section").innerText = data[a].quote
                current_num = a }
            }

            
                function initalise() {
                    document.querySelector(".js-details-section").innerText = ""
                    a = Math.floor(Math.random() * 10)
                    document.querySelector(".js-section").innerText = data[a].quote
                    current_num = a
                    document.querySelector(".footer-btn-img-1").src = data[a].image_jc
                    document.querySelector(".footer-btn-img-2").src = data[a].image_cn
                    }
                
            
            function toggleButton() {
                document.querySelector('.footer_2').classList.toggle('dis-n')
                document.querySelector('.footer_1').classList.toggle('dis-n')
                }


                initalise()
