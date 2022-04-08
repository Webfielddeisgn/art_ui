/*
|--------------------------------------
| Developed By Alex from WebField Design
|--------------------------------------
*/
const Tabs = {
    data(){
      return{
        active: 0,
        subActive:0,
        showMainImage:false,
        showSubImage:false,
        selectAFrame: [
			'./img/black_frame/select_a_frame.jpg', 
			"./img/white_frame/select_a_frame.jpg", 
		],
        numberOfTabs:[
			{
                name:'Black Frame',
                number:0,
                image:'./img/black_frame/black_plain_side.jpg',
                subImages:[
                    {
                        image:'./img/black_frame/black_plain_side.jpg',
                        number:0
                    },
                    {
                        image:'./img/black_frame/black_plain_side_demonstions.jpg',
                        number:1
                    },
                    {
                        image:'./img/black_frame/black_plain_straight.jpg',
                        number:2
                    },
                    {
                        image:'./img/black_frame/frame_angle.jpg',
                        number:3
                    },
                    
                ]
            },
			{
                name:'White Frame',
                number:1,
                image:'./img/white_frame/white_frame_side.jpg',
                subImages:[
                    {
                        image: './img/white_frame/white_frame_side.jpg',
                 
                        number:0
                    },
                
                    {
                        image:'./img/white_frame/white_frame_demonstions.jpg',
                        number:1
                    },
                    {
                        image:'./img/white_frame/white_frame_straight.jpg',
        
                        number:2
                    },
                    {
                        image:'./img/white_frame/white_frame_edge.jpg',
                        number:3
                    },
                  
                    
                ]
            },

		]
      }
    },
    methods: {
		activate(index) {
			this.active = index;
            this.subActive = 0
		},
        activateSub(index){
            this.subActive = index
        }
	}
  }
  Vue.createApp(Tabs).mount('#app')