function setToggleLabel(toggle, target) {
  if (target.hasClass('disabled')) {
    toggle.html('Enable');
  } else {
    toggle.html('Disable');
  }
};

function readyFn() {
  var $toggleBtn = $("#test-button");
  var $targetBtn = $("#new-button");

  setToggleLabel($toggleBtn, $targetBtn);

  $toggleBtn.on('click', function() {
    $targetBtn.toggleClass('disabled');
    setToggleLabel($toggleBtn, $targetBtn);
  });

  $targetBtn.on('click', function() {
    if ($targetBtn.hasClass('disabled')) {
      $targetBtn.addClass('error');
      setTimeout(function () {
        $targetBtn.removeClass('error')
      }, 1000)
    }
  })

};

$(readyFn);
 