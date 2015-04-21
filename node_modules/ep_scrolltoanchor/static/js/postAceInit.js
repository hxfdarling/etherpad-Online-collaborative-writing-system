exports.postAceInit = function(hook, context) {

  var anchor = getUrlVars()['anchor'];
  if (anchor) {
    findAnchorAndScrollTo(anchor);
  }

};

function findAnchorAndScrollTo(anchor) {
  var count = 1;
  $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").contents().each(function() {
    if ($(this).text().trim() == '#' + anchor.trim()) {
      var newY = $(this).context.offsetTop + "px";
      var $outerdoc = $('iframe[name="ace_outer"]').contents().find("#outerdocbody");
      var $outerdocHTML = $('iframe[name="ace_outer"]').contents().find("#outerdocbody").parent();
      $outerdoc.animate({scrollTop: newY});
      if($.browser.mozilla) $outerdocHTML.animate({scrollTop: newY}); // needed for FF
      return false;
    }
    count++;
  });
}

function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

