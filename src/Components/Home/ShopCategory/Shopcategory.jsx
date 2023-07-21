import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from '../../ToysCard/ToysCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const ShopCategory = () => {
    const [toys, setToys] = useState([]);
    const [active, setActive] = useState('Sports Car');

    const handleTabSelect = (index, lastIndex, event) => {
        const selectedTab = event.target.innerText;
        setActive(selectedTab)
    };
    useEffect(() => {
        fetch(`https://toy-cars-server-blue.vercel.app/allToys/${active}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [active])
    return (
        <div data-aos="fade-up" className='grid justify-center mt-5'>
            <h4 className="text-2xl md:text-4xl text-center font-semibold mt-24 font-serif text-cyan-500">Shop By Category</h4>
            <hr />
            <Tabs defaultIndex={0} onSelect={handleTabSelect}>
                <TabList className='font-semibold text-lg my-4'>
                    <Tab>Sports Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Truck</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 lg:gap-5'>
                        {toys?.map((toy) => (
                            <ToysCard key={toy._id} toy={toy}></ToysCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid lg:grid-cols-3 lg:gap-5'>
                        {toys?.map((toy) => (
                            <ToysCard key={toy._id} toy={toy}></ToysCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid lg:grid-cols-3 lg:gap-5'>
                        {toys?.map((toy) => (
                            <ToysCard key={toy._id} toy={toy}></ToysCard>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;