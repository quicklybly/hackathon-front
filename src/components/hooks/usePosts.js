import {ref} from "vue";

export default function usePosts() {
    const posts = ref([])

    posts.value.push([{
        title: 'test1',
        body: 'hi there!',
        rating: -22,
        tags: ['c', 'crips', 'a lot of food', 'middle'],
        filter: 'CTF'},
        {title: 'test2',
        body: 'F:LSAJOPFJASOFJASPIHJFPOQWKFPOASJPOOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP!',
        rating: 100,
        tags: ['flask', 'spring', 'summer', 'avangard'],
        filter: 'hackathon'},
        {title: 'test3',
        body: 'hi there!',
        rating: -9999,
        tags: ['fanta', 'cola', 'senior', 'sprite', 'google'],
        filter: 'algorithmic'},
    ])

    console.log(posts)

    return {
        posts
    }
}