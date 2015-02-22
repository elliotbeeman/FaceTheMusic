var LLink = function(data)
{
	this.data = data;
	this.next = null;
}

var Queue = function()
{
	this.first = null;
	this.last = null;
}

Queue.prototype.push = function(data)
{
	var new_link = new LLink(data);

	if(this.first == null)
	{
		this.first = new_link;
		this.last = new_link;
	}

	else
	{
		this.last.next = new_link;
		this.last = new_link;
	}
}

Queue.prototype.pop = function()
{
	var res = this.first.data;
	this.first = this.first.next;
	return this.first.data;
}

var VectorQueue = function()
{
	this.vector = [];
}

VectorQueue.prototype.push = function(pos, data)
{
	if (this.vector[pos] == undefined)
	{
		this.vector[pos] = new Queue();
	}

	this.vector[pos].push(data);
}

VectorQueue.prototype.pop = function(pos)
{
	if (this.vector[pos] === undefined)
		return null;

	else
		return this.vector[pos].pop();
}

VectorQueue.prototype.print = function()
{
	for (var key in this.vector)
	{
		console.log(key + ":");

		var curr = this.vector[key].first;

		while(curr != null)
		{
			console.log(curr.data);
			curr = curr.next;
		}
	}
}