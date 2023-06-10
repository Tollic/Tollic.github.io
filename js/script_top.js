$('.sum').click(function() {	
    let $this = $(this);
    let isEditing = $this.hasClass('sum_1');
    
    if (!isEditing) {
      let val = $this.html();
    
      let $input = $('<input type="text" class="editor-input">');
      $input.blur(function() {
        let $this = $(this);
        let val = $this.val();
        $this.closest('.sum_1').html(val).removeClass('sum_1');
      })
      $input.val(val);
      $this.html($input);
      $input.focus();
    }
    $this.addClass('sum_1');
});

$('.ob_x').click(function() {	
    let $this = $(this);
    let isEditing = $this.hasClass('ob_x_1');
    
    if (!isEditing) {
      let val = $this.html();
    
      let $input = $('<input type="text" class="editor-input">');
      $input.blur(function() {
        let $this = $(this);
        let val = $this.val();
        $this.closest('.ob_x_1').html(val).removeClass('ob_x_1');
      })
      $input.val(val);
      $this.html($input);
      $input.focus();
    }
    $this.addClass('ob_x_1');
});

$('.x_x').click(function() {	
    let $this = $(this);
    let isEditing = $this.hasClass('x_x_1');
    
    if (!isEditing) {
      let val = $this.html();
    
      let $input = $('<input type="text" class="editor-input">');
      $input.blur(function() {
        let $this = $(this);
        let val = $this.val();
        $this.closest('.x_x_1').html(val).removeClass('x_x_1');
      })
      $input.val(val);
      $this.html($input);
      $input.focus();
    }
    $this.addClass('x_x_1');
});

$('.bon').click(function() {	
    let $this = $(this);
    let isEditing = $this.hasClass('bon_1');
    
    if (!isEditing) {
      let val = $this.html();
    
      let $input = $('<input type="text" class="editor-input">');
      $input.blur(function() {
        let $this = $(this);
        let val = $this.val();
        $this.closest('.bon_1').html(val).removeClass('bon_1');
      })
      $input.val(val);
      $this.html($input);
      $input.focus();
    }
    $this.addClass('bon_1');
});

$('.lider_1').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('lider_1_1');
  
  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="lider_1-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.lider_1_1').html(val).removeClass('lider_1_1');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('lider_1_1');
});

$('.lider_2').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('lider_2_2');
  
  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="lider_2-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.lider_2_2').html(val).removeClass('lider_2_2');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('lider_2_2');
});

$('.lider_3').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('lider_3_3');
  
  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="lider_3-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.lider_3_3').html(val).removeClass('lider_3_3');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('lider_3_3');
});


$('.ix_1').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('ix_1_1');
  
  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="ix_1-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.ix_1_1').html(val).removeClass('ix_1_1');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('ix_1_1');
});

$('.ix_2').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('ix_2_2');
  
  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="ix_2-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.ix_2_2').html(val).removeClass('ix_2_2');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('ix_2_2');
});

$('.ix_3').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('ix_3_3');

  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="ix_3-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.ix_3_3').html(val).removeClass('ix_3_3');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('ix_3_3');
});

$('.sum_v_1').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('sum_v_1_1');

  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="sum_v_1-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.sum_v_1_1').html(val).removeClass('sum_v_1_1');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('sum_v_1_1');
});

$('.sum_v_2').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('sum_v_2_2');

  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="sum_v_2-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.sum_v_2_2').html(val).removeClass('sum_v_2_2');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('sum_v_2_2');
});

$('.sum_v_3').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('sum_v_3_3');

  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="sum_v_3-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.sum_v_3_3').html(val).removeClass('sum_v_3_3');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('sum_v_3_3');
});