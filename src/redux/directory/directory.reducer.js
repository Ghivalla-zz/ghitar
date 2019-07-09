const INITIAL_STATE = {
	sections:[
        {
          title: 'Effects',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/08/15/16/56/guitar-1595862_960_720.jpg',
          id: 1,
          linkUrl:'shop/effects'
        },
        {
          title: 'Amps',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/09/02/15/31/guitar-amplifier-3649042_960_720.jpg',
          id: 2,
          linkUrl:'shop/amps'
        },
        {
          title: 'Accessories',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/08/12/12/51/music-accessories-1588402_960_720.jpg',
          id: 3,
          linkUrl:'shop/accessories'
        },
        {
          title: 'Electric',
          imageUrl: 'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          size: 'large',
          id: 4,
          linkUrl:'shop/electric'
        },
        {
          title: 'Accoustic',
          imageUrl: 'https://t4.ftcdn.net/jpg/02/38/20/31/240_F_238203139_aHnKVip8dNgBgAeHk6UArg5zLPxH0gJQ.jpg',
          size: 'large',
          id: 5,
          linkUrl:'shop/accoustic'
        }
    ]
}

const directoryReducer = (state=INITIAL_STATE,action) =>{
	switch(action.type){
		default:
			return state;
	}
}

export default directoryReducer;