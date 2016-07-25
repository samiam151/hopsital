app.service('DirectionsService', function(){
    this.topDirections = [
        {
            item: 'Learn about my medicines',
            url: '#/medications',
            bg_img: 'static/img/medications.jpeg'
        },
         {
            item: 'Watch videos picked just for me',
            url: '#/videos',
            bg_img: 'static/img/skeleton_muscle.jpg'
        }, {
            item: 'Rate my pain',
            url: '#/pain',
            bg_img: 'static/img/cactus.jpeg'
        }
    ];

    this.bottomDirections = [
        {
            item: 'See my medicines',
            color: '#E74C3C',
            glyph: 'leaf'
        },
        {
            item: 'Browse health videos',
            color: '#5499C7',
            glyph: 'facetime-video'
        },
        {
            item: 'Watch TV',
            color: '#F5B041',
            glyph: 'picture'
        },
        {
            item: 'Listen to Music',
            color: '#45B39D',
            glyph: 'music'
        },
        {
            item: 'Order a meal',
            color: '#34495E',
            glyph: 'cutlery'
        },
        {
            item: 'Share a compliment',
            color: '#AAB7B8',
            glyph: 'comment'
        }
    ];
});