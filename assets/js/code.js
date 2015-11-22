
document.getElementById('ballcount').addEventListener('keyup', cal_recipe)
document.getElementById('ballweight').addEventListener('keyup', cal_recipe)
document.getElementById('flour').addEventListener('keyup', cal_recipe)
document.getElementById('water').addEventListener('keyup', cal_recipe)
document.getElementById('yeast').addEventListener('keyup', cal_recipe)
document.getElementById('salt').addEventListener('keyup', cal_recipe)

function cal_recipe(){
  
  var ball_count =  parseFloat(document.getElementById('ballcount').value) || 0
  var ball_weight =  parseFloat(document.getElementById('ballweight').value) || 0
  var flour_percent = parseFloat(document.getElementById('flour').value) || 0
  var water_percent = parseFloat(document.getElementById('water').value) || 0
  var yeast_percent = parseFloat(document.getElementById('yeast').value) || 0
  var salt_percent = parseFloat(document.getElementById('salt').value) || 0

  var total_weight = ball_count * ball_weight
  var total_percent = flour_percent + water_percent + yeast_percent + salt_percent
  var flour_weight = total_weight / (total_percent / 100) 

  document.getElementById('flour_w').value = flour_weight
  document.getElementById('water_w').value = flour_weight * (water_percent / 100)
  document.getElementById('yeast_w').value = flour_weight  * (yeast_percent / 100)
  document.getElementById('salt_w').value = flour_weight  * (salt_percent / 100)
  
}

