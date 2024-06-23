  document
        .querySelector(".red-box")
        .addEventListener("mouseover", function () {
          var progressFill = document.getElementById("progressFill");
          var progressLabel = document.getElementById("progressLabel");

          // 使用setTimeout确保动画完成后更新标签
          setTimeout(function () {
            progressFill.style.width = "75%"; // 设置进度为24%
            progressLabel.textContent = "75%"; // 更新标签文本
            progressLabel.parentNode.classList.add("filled"); // 添加类以显示标签
          }, 2000); // 等待2秒（与过渡动画时间相同）
        });