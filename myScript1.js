function topSpanClick(num)//点击事件，网页跳转
{
    if(num==12||num==13)
    {
        return 0;
    }
    var spanurl=["https://www.baidu.com/s?ie=utf-8&fr=bks0000&wd=%E6%88%B3%E7%88%B7",
                "https://www.baidu.com/s?rtt=1&bsst=1&cl=2&tn=news&rsv_dl=ns_pc&word=%E6%88%B3%E7%88%B7",
                "https://tieba.baidu.com/f?ie=utf-8&fr=bks0000&kw=%E6%88%B3%E7%88%B7",
                "https://zhidao.baidu.com/search?pn=0&&rn=10&lm=0&fr=bks0000&word=%E6%88%B3%E7%88%B7",
                "http://music.taihe.com/search?f=ms&ct=134217728&ie=utf-8&rn=&lm=-1&pn=30&fr=bks0000&key=%E6%88%B3%E7%88%B7",
                "http://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=%E6%88%B3%E7%88%B7",
                "https://www.baidu.com/sf/vsearch?pd=video&tn=vsearch&ie=utf-8&rsv_spt=17&wd=%E6%88%B3%E7%88%B7",
                "https://map.baidu.com/search/%E6%88%B3%E7%88%B7/@11551964.13,3425607.32,12z?querytype=s&wd=%E6%88%B3%E7%88%B7&c=79&pn=0&device_ratio=2&da_src=shareurl",
                "https://wenku.baidu.com/search?lm=0&od=0&ie=utf-8&fr=bks0000&word=%E6%88%B3%E7%88%B7",
                "https://baike.baidu.com/item/%E7%89%B9%E6%B4%9B%E8%80%B6%C2%B7%E5%B8%8C%E6%96%87/3725159?fromtitle=%E6%88%B3%E7%88%B7&fromid=20834710&fr=aladdin",
                "https://www.baidu.com/",
                "",
                "",   ]
    window.location.href=spanurl[num-1];
}
function topSpanMousein(num)//鼠标移入加下划线
{
    var spanid="content"+num;//获得id
    var a=document.getElementById(spanid);//根据id找到元素
    a.style.textDecoration="underline";
}
function topSpanMouseout(num)//鼠标移出取消下划线
{
    var spanid="content"+num;//获得id
    var a=document.getElementById(spanid);//根据id找到元素
    a.style.textDecoration="none";
}
function bgcchange(num,c)
{
     var a=document.getElementById(num);
     a.style.backgroundColor=c;
}