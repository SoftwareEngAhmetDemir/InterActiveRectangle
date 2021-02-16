
  function get_index_for_Color(color)
  {
    for(let i=0;i<colors.length;i++)
    {
      if(colors[i]===color)
      {
        colors.splice(i,1);
      }
    }
  }
  
  
  function Update()
  {
    console.log('called')
    d3.select('svg').remove();
    d3.select('body')
    .append('svg')
    .attr('width','100%')
    .attr('height','20%');
    d3.select('svg').selectAll('rect')
.data(colors)
.enter()
.append('rect').on('click',(d,i)=>{
  get_index_for_Color(i)
  Update();
})
.attr('width','10%')
.attr('height','60%')
.attr('x',function(d,i){
  let u = i*11;
   return (u+'%')
 })
.attr('y','10')
.attr('fill',function(d,i){
  return colors[i];
})
.attr('stroke','pink')



    

  }


  d3.select('body')
.append('svg')
.attr('width','100%')
.attr('height','20%');






colors = ['blue','green','pink','red'];




d3.select('svg').

selectAll('rect')

.data(colors)
.enter()
.append('rect').on('click',(d,i)=>{
  get_index_for_Color(i)
Update();
})
.attr('width','10%')
.attr('height','60%')
.attr('x',function(d,i){
 let u = i*11;
  return (u+'%')
})

.attr('y','10')
.attr('fill',function(d,i){
  return colors[i];
})
.attr('stroke','pink')


