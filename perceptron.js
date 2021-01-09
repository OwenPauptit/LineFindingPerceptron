sign = function(n)
{
    if (n >= 0)
    {
        return 1;
    }
    return -1;
}

class Perceptron
{

    constructor()
    {
        this.LEARNINGRATE = 0.1;

        // initialise weights randomly
        this.weights = [];
        for (var i = 0; i < 2; i++)
        {
            this.weights.push(Math.random()*2-1);
        }
        //console.log(this.weights);
    }

    guess(inputs)
    {
        var sum = 0.0;
        for (var i = 0; i < this.weights.length; i++)
        {
            sum += inputs[i] * this.weights[i];
        }
        var output = this.activate(sum);
        return output;
    }

    activate(sum)
    {
        return sign(sum);
    }

    train(inputs, target)
    {
        var guess = this.guess(inputs);
        var error = target - guess;

        // Tune all the weights
        for(var i = 0; i < this.weights.length; i++)
        {
            this.weights[i] += error * inputs[i] * this.LEARNINGRATE;
        }
        //console.log(this.weights);
    }
}