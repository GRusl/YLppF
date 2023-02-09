module.exports = async function (input) 
{  
    async function solution(input) 
    {
        let ans = []

        const prom_size = new Promise(
            (resolve, reject) => {
                input.size(resolve);
            }
        );

        let size = await prom_size.then(
            (size) => {
                return size;
            }
        );

        for (let i = 0; i < size; i++) 
        {
            const prom_elem = new Promise((resolve, reject) => {
                if (i > size - 1 || i < 0)
                {
                    reject('InvalidIndex');
                }
                input.read(i, resolve);
            });

            let elem = await prom_elem
                                .then((el) => {
                                    return el;
                                })
                                .catch((err) => {
                                    console.log(err);
                                });

            if (typeof(elem) === 'number') 
            {
                ans.push(elem);
            } else 
            {
                let add = await solution(elem).then(
                    (out) => {
                        return out;
                    }
                );
                
                for (let j in add) 
                {
                    ans.push(add[j]);
                }
            }
        }

        return ans;
    }
 
    const answer = await solution(input).then(
        (out) => {
            return out;
        }
    );

    return answer;  
}
