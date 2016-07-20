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
            item: 'See my medicines'
        },
        {
            item: 'Browse health videos'
        },
        {
            item: 'Watch TV'
        },
        {
            item: 'Listen to Music'
        },
        {
            item: 'Order a meal'
        },
        {
            item: 'Share a compliment'
        }
    ];

    // this.allDirections = this.topDirections.concat(this.bottomeDirections);
});