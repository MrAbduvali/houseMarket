import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from '../firebase'
import { toast } from 'react-toastify'

function Category() {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const listingsRef = collection(db, 'listings');

                //query

                const q = query(listingsRef, where('type', '==', params.categoryName), orderBy('timestamp', 'desc'), limit(10));

                const querySnap = await getDocs(q);

                let listings = [];

                querySnap.forEach((doc) => {
                    return listings.push({
                        id: doc.id,
                        data: doc.data(),
                    })
                })

                setListings(listings);
                setLoading(false);

            } catch (error) {
                toast.error('not fetching')
            }
        }

        fetchListings();

    }, []);

    return (
        <div>
            <header>
                <p>
                    {params.categoryName === 'rent' ? 'Places for rent' : 'Places for sale'}
                </p>
            </header>

            <main>
                {loading ? <p>loading...</p> : listings && listings.length > 0 ?
                    (
                        <main>
                            <ul>
                                {listings.map((listing) => (
                                    <h3>{listing.data.name}</h3>
                                ))}
                            </ul>
                        </main>
                    )
                    : <p>No lists for {params.categoryName}</p>}
            </main>
        </div>
    )
}

export default Category