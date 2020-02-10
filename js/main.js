$(document).ready(function() {
  $('.dropdown').find('.select').mouseenter(function () {
    $(this).parents('.dropdown').attr('tabindex', 1).focus();
    $(this).parents('.dropdown').toggleClass('active');
    $(this).parents('.dropdown').find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').mouseleave(function () {
      $(this).removeClass('active');
      $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
      $(this).parents('.dropdown').find('span').text($(this).text());
      $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
      $(this).parents('.dropdown').removeClass('active');
      $(this).parents('.dropdown').find('.dropdown-menu').slideUp(300);
  });

  $('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
    msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
    let x = $(this).attr('class');
    $(this).parents('.dropdown').find('.gain-select__value').removeClass('tarif1 tarif2 tarif3 tarif4 tarif5').addClass(x);
  }); 



  $('.main-input_required').on('keyup', function() {
    if($(this).val() == ''){
      $(this).parents('.input-block').addClass('input-required')
      $(this).parents('.input-block').find('.fa-check').addClass('d-none');
      $(this).parents('.input-block').find('.fa-times').removeClass('d-none');
    } else {
      $(this).parents('.input-block').removeClass('input-required');
      $(this).parents('.input-block').find('.fa-check').removeClass('d-none');
      $(this).parents('.input-block').find('.fa-times').addClass('d-none');
    }
  });

  $('.ref-nav__btn').click(function() {
    let a = $(this).attr('data-tab');
    $('.ref-nav__btn').removeClass('tab-ref_active');
    $(this).addClass('tab-ref_active');
    $(this).parents('.ref-block_2').find('.tab_n').hide(0);
    $(this).parents('.ref-block_2').find(a).fadeIn(400);
  });

  $('.remove-pass-check').click(function() {
    $(this).parents('.check-block').remove();
  });
  
});