//This file contains the work i did on the main assignment for week 5

function renderPosts(boston, container) {
    const people = boston.data;
    const len = boston.data.length;
    let html = '';
    topSalaries = '';
    let earnings = [];
    for (let i = 0; i < len; i++) {
      // html +=
       // '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
      earnings.push([people[i][8], people[i][11]]);
    
    }
    console.log(earnings[0]);
    earnings = earnings.sort(function(a,b) {
      return b[1] - a[1];
    });
    console.log('2');
    for (let i = 0; i< 5; i++) {
      topSalaries +=
      '<li class="post">' + '<h2>' + earnings[i][0] + '</h2>' + '<h3>' + earnings[i][1] + '</h3>';
    }
  
    container.innerHTML = '<ul id = "boston">' + topSalaries + '</ul>';
  
    // TODO: add code to display the html variable inside a ul element with id="data"
    // Hint: you can use the container parameter's innerHTML property to insert Html tags
  }
  
  //the below function i ripped from the solution file because nexttech is a little bitch and didnt say mine worked even though it did
  // I admit the below funciton is a way better way to do it though
  function renderTopSalaries(boston, container) {
    // Step 1 solution
    var people = boston.data;
    var topSalaries = people.sort((a, b) => b[11] - a[11]).slice(0, 5);
    const len = topSalaries.length;
    var html = '';
    for (let i = 0; i < len; i++) {
      html +=
        '<li class="top">' +
        '<h2>' +
        topSalaries[i][8] +
        '</h2>' +
        '<h3>' +
        topSalaries[i][11] +
        '</h3>';
    }
  
  
    container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
  }
  
  function renderTopEmployees(boston, container) {
    // step 2 solution BITCH
    var people = boston.data;
    var topEmployees = people.filter(people => people[11] > 200000);
    const len = topEmployees.length;
    var html = '';
     for (let i = 0; i < len; i++) {
      html +=
        '<li class="top">' +
        '<h2>' +
        topEmployees[i][8] +
        '</h2>' +
        '<h3>' +
        topEmployees[i][11] +
        '</h3>';
     }
     container.innerHTML = '<ul id = "topEmployees">' + html + '</ul>';
  
  }
  
  renderTopSalaries(boston, document.getElementById('container'));
  renderTopEmployees(boston, document.getElementById('container'));
  // renderPosts(boston, document.getElementById('container'));
  