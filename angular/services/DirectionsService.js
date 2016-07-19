app.service('DirectionsService', function(){
    this.topDirections = [
        'Learn about my medicines',
        'Watch videos picked just for me',
        'Rate my pain'
    ];

    this.bottomDirections = [
        'See my medicines',
        'Browse health videos',
        'Watch TV',
        'Listen to Music',
        'Order a meal'
    ];

    this.allDirections = this.topDirections.concat(this.bottomeDirections);
});