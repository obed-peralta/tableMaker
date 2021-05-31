
let btnTest = document.getElementById('btnTest'); // Nuestro botón Test

btnTest.addEventListener('click', () => { //Un evento click al botón
    document.getElementById('teams').innerHTML = "";
    let texto = document.getElementById('areaTexto').value; //Capturamos el texto del textarea
    let lineas = texto.split('\n'); //Lo separamos por saltos de linea
    let grid_section;
    let divMembers;
    let teamTotalPoints = 0;
    lineas.forEach(linea => { //Por cada línea
        if (linea.includes(".")) { //Si la linea contiene el símbolo <.> entonces es el encabezado del equipo
            
            if(teamTotalPoints != 0){
                let divTeamTotalPoints = document.createElement('div');
                    divTeamTotalPoints.className = 'team-total-points';
                    divTeamTotalPoints.textContent = teamTotalPoints;
                grid_section.appendChild(divTeamTotalPoints);
                teamTotalPoints = 0;
            }

            let encabezado = linea.split(" "); //Separo el nombre del equipo del color indicado
            let team = encabezado[0].slice(1,encabezado[0].length).split("-"); //Le quito el <.> al nombre del equipo y lo separo del alias
            let background_color = encabezado[1]; // Extraigo el color indicado en el encabezado

            grid_section = document.createElement('div'); //Creamos nuestro div <grid-section>
                grid_section.className = 'grid-section';
                grid_section.setAttribute('id',`${team[0]}`);
                grid_section.style.backgroundColor = background_color;
            divMembers = document.createElement('div');
                divMembers.className = 'members';

            let divTeam = document.createElement('div');
                divTeam.className = 'team';

            let divTeamName = document.createElement('div');
                divTeamName.className = 'name';
                divTeamName.textContent = team[0];

            divTeam.appendChild(divTeamName);

            if(team.length > 1){ //Si además del nombre tiene el alias

                let divTeamAlias = document.createElement('div');
                    divTeamAlias.className = 'alias';
                    divTeamAlias.textContent = team[1];

                divTeam.appendChild(divTeamAlias);
            }

            grid_section.appendChild(divTeam);
            grid_section.appendChild(divMembers);

            document.getElementById('teams').appendChild(grid_section);

        }else if(linea != ""){
            let member = linea.split(" ");
            let nickname = member[0];
            let points = member.slice(1,member.length);
            let totalPoints = points.reduce((a, b) => parseInt(a) + parseInt(b), 0);
            teamTotalPoints += totalPoints;
            console.log(member);

            let divMember = document.createElement('div');
                divMember.className = 'member';

            let divNickName = document.createElement('div');
                divNickName.className = 'nickname';
                divNickName.textContent = nickname;
            let divPoints = document.createElement('div');
                divPoints.className = 'points';
                divPoints.style.gridTemplateColumns = `repeat(${points.length},1fr)`;
                points.forEach(point => {
                    let divPoint = document.createElement('div');
                        divPoint.className = 'point';
                        divPoint.textContent = parseInt(point);
                    divPoints.appendChild(divPoint);
                });

            let divTotalPoints = document.createElement('div');
                divTotalPoints.className = 'total-points';
                divTotalPoints.textContent = totalPoints;

            divMember.appendChild(divNickName);
            divMember.appendChild(divPoints);
            divMember.appendChild(divTotalPoints);

            divMembers.appendChild(divMember);

        }
    });
    let divTeamTotalPoints = document.createElement('div');
        divTeamTotalPoints.className = 'team-total-points';
        divTeamTotalPoints.textContent = teamTotalPoints;
    grid_section.appendChild(divTeamTotalPoints);
});