// 使用querySelectorAll选择所有.box元素  
document.querySelectorAll('.box').forEach(function(box) {  
    // 为每个.box元素添加mouseover和mouseout事件监听器  
    box.addEventListener('mouseover', function() {  
        this.style.backgroundColor = 'red'; // 鼠标碰到时变成红色  
    });  
  
    box.addEventListener('mouseout', function() {  
        this.style.backgroundColor = 'gray'; // 鼠标离开时恢复灰色  
    });  
});