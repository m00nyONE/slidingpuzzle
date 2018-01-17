var Board;

function load()
{
	    Board = document.getElementById("Board");
	    for (var j = 0 ; j <= 4 ; j++)
		    {
		            var row = document.createElement("div");
		            row.setAttribute("class","row");
		            Board.appendChild(row);
		            for ( var i = 0 ; i <= 4 ; i++)
			            {
				                var tmp = document.createElement("button");
				                tmp.setAttribute("class","field");
				                tmp.setAttribute("id",""+(j*5+i));
				                tmp.innerHTML=""+(j*5+i);
				                tmp.setAttribute("onclick","swap(this);");
				                row.appendChild(tmp);
				            }
		        }
	    Board.children[0].children[0].innerText="EMPTY";
	    Board.children[0].children[0].setAttribute("class","emptyfield");


}

function swap(clicked)
{


	    var row = Math.floor(clicked.getAttribute("id") / 5);
	    var id = Math.floor(clicked.getAttribute("id") % 5);

	    var ef;
	    if(row+1 < Board.children.length)
		    {
		            console.log(row+1+" ||| "+ Board.children.length);
		            if(Board.children[row+1].children[id].innerHTML == "EMPTY" )
			            {
				                ef=Board.children[row+1].children[id];
				            }
		        }
	    if(row-1 >= 0)
		    {
		            if(Board.children[row-1].children[id].innerHTML == "EMPTY" )
			            {
				                ef=Board.children[row-1].children[id];
				            }
		        }
	    if(id+1 < Board.children[0].children.length)
		    {
		            if(Board.children[row].children[id+1].innerHTML == "EMPTY" )
			            {
				                ef=Board.children[row].children[id+1];
				            }
		        }
	    if(id-1 >= 0)
		    {
		            if(Board.children[row].children[id-1].innerHTML == "EMPTY" )
			            {
				                ef=Board.children[row].children[id-1];
				            }
		        }
	    if(ef!=null)
		    {
		            var tmp = clicked.innerHTML;
		            clicked.innerHTML = ef.innerHTML;
		            ef.innerHTML = tmp;
		            tmp = clicked.getAttribute("class");
		            clicked.setAttribute("class",""+ef.getAttribute("class"));
		            ef.setAttribute("class",""+tmp);
		        }
}

function shuffle()
{
	    for ( var i = 0 ; i < 24 ; i++)
		    {
		            var a1 = Math.floor(Math.random() * 5);
		            var b1 = Math.floor(Math.random() * 5);
		            var a2 = Math.floor(Math.random() * 5);
		            var b2 = Math.floor(Math.random() * 5);
		            var tmp = Board.children[a1].children[b1].innerHTML;
		            Board.children[a1].children[b1].innerHTML = Board.children[a2].children[b2].innerHTML;
		            Board.children[a2].children[b2].innerHTML = tmp;
		            tmp = Board.children[a1].children[b1].getAttribute("class");
		            Board.children[a1].children[b1].setAttribute("class",""+Board.children[a2].children[b2].getAttribute("class"));
		            Board.children[a2].children[b2].setAttribute("class",""+tmp);
		        }
}



