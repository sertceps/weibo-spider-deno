# 
> https://v8.dev/features/top-level-await

# 搜索
>  https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D3%26q%3D%E5%BC%A0%E4%B8%89%26t%3D&page_type=searchall

> containerid: 100103type=3&q=张三&t=  
> page_type: searchall

```json
{
    "ok":1,
    "data":{
        "cardlistInfo":{
            "total":500,
            "page_size":"10",
            "page": 2
        },
        "cards":[
            {
                // 第一页(page=2)才有
                "card_type": 4,
            },
            {
                "card_type": 11,
                "card_group":[
                    "card_type":10,
                    "user":{
                        "id":7433207980,
                        "screen_name": "",
                        "description":"",
                        "followers_count":"1.3万",
                        "avatar_hd":"url",
                        "gender":"f",
                        "verified":true
                    }
                ]
            }
        ]
    }
}
```

```json

```
