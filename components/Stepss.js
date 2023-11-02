import { useRouter } from "next/router";
/*Routing for the bar*/
const steps = [
    {step: 1, name: 'Menu', url: '/'},
    {step: 2, name: 'Abstract', url: '/abstract'},
    {step: 3, name: 'Data and Total', url: '/total'},
];

export default function Stepss() {

{/*Routing to top bar*/}
    const router = useRouter();

    const ProcessCalculate = () => {        
        let value
        if(router.pathname === "/"){
            value = 2
        }else if (router.pathname === "/abstract"){
            value = 50
        } else {
            value = 100
        }
        return value
    }

  return (
    <>
        <div className="flex justify-between mb-5">
            {steps.map((step) => (
                <button
                    onClick={() => {
                        router.push(step.url);
                    }}
                    className="text-2xl font-bold" key={step.step}>{step.name}</button>
            ))}
        </div>
        <div className="bg-gray-100 mb-10">
            <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{width: `${ProcessCalculate()}%`}}>

            </div>
        </div>
    </>
  )
}
