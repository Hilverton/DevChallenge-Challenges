const projects = [
  {
    id: 1,
    title: 'Amazing Graph',
    path: 'AmazingGraph-master',
  },
];

const list = document.getElementById('list');

projects.forEach(project => {
  const item = document.createElement('div');

  item.className = 'col-sm-4 p-md-2 mb-3';
  item.innerHTML = `
    <img class="img-fluid" src="./${project.path}/design/desktop.png" />
    <div class="p-2 bg-white">
      <p class="h5 font-weight-bold bg-white">${project.title}</p>
      <a class="btn btn-success font-weight-bold" href="./${project.path}/index.html" target="no_blank">Ver projeto</a>
    </div>
  `;

  list.appendChild(item);
});