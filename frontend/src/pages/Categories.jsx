import { useState, useEffect } from 'react';
import { categoryAPI } from '../utils/api';
import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const { data } = await categoryAPI.getAllCategories();
            setCategories(data.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };

    if (loading) return <div className="loading"><div className="spinner"></div></div>;

    return (
        <div className="categories-page">
            <div className="page-header">
                <div className="container">
                    <h1>Room Categories</h1>
                    <p>Explore our different room types</p>
                </div>
            </div>

            <div className="container">
                <div className="categories-grid">
                    {categories.map((category) => (
                        <div key={category._id} className="category-card card">
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
