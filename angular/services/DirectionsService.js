app.service('DirectionsService', function(){
    this.topDirections = [
        {
            item: 'Learn about my medicines',
            url: '#/medications'
        },
         {
            item: 'Watch videos picked just for me',
            url: '#/videos'
        }, {
            item: 'Rate my pain',
            url: '#/pain'
        }
    ];

    this.bottomDirections = [
        {
            item: 'See my medicines',
            url: '#/medications'
        },
        {
            item: 'Browse health videos',
            url: '#/medications'
        },
        {
            item: 'Watch TV',
            url: '#/medications'
        },
        {
            item: 'Listen to Music',
            url: '#/medications'
        },
        {
            item: 'Order a meal',
            url: '#/medications'
        }   
    ];

    // this.allDirections = this.topDirections.concat(this.bottomeDirections);
});