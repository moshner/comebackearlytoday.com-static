(function($){
    // Subscribe to newsletter box
    var basetext = 'type in your email here';
    $('#mc_mv_EMAIL').click(function(){
        if ($(this).val() == basetext) {
            $(this).val('');
        }
    });
    $('#mc_mv_EMAIL').blur(function(){
        if ($(this).val() == '') {
            $(this).val(basetext);
        }
    });
})(jQuery);