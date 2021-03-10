import sanityClient from "../client";

export const fetchAboutData = async () => {
  return await sanityClient
    .fetch(
      `*[_type == "about"]{
			title,
			body,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
    )
    .then((data) => {
      return data[0];
    })
    .catch((error) => console.log("error", error));
};

export const fetchBlogData = async () => {
  return await sanityClient
    .fetch(
      `*[_type == "post"]{
				title,
				slug,
				author,
				mainImage{
					asset->{
						_id,
						url
					},
					alt
				},
				body,
				publishedAt,
				description
			}`
    )
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error", error));
};

export const fetchHeroData = async () => {
  return await sanityClient
    .fetch(
      `*[_type == "hero"]{
			title,
			subTitle,
			description,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
    )
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error", error));
};

export const fetchProduct = async () => {
  return await sanityClient
    .fetch(
      `*[_type == "product"]{
			title,
			slug,
			projectType,
			special,
			new,
			bestSeller,
			body,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
    )
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error", error));
};

export const fetchStone = async () => {
  return await sanityClient
    .fetch(
      `*[_type == "stone"]{
			title,
			slug,
			projectType,
			special,
			new,
			bestSeller,
			body,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
    )
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error", error));
};

export const fetchHeroBlog = async () => {
  return await sanityClient
    .fetch(
      `*[_type == "heroBlog"]{
			title,
			subTitle,
			description,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
    )
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error", error));
};

export const fetchSinglePost = async (slug) => {
  return await sanityClient
    .fetch(
      `*[slug.current == "${slug}"]{
				title,
				slug,
				mainImage{
					asset->{
						_id,
						url
					}
				},
				body,
				"name": author->name,
				"authorImage": author->image,
				publishedAt
			}`
    )
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error", error));
};

export const fetchSingleProduct = async (slug) => {
  return await sanityClient
    .fetch(
      `*[slug.current == "${slug}"]{
				title,
				slug,
				mainImage{
					asset->{
						_id,
						url
					}
				},
				body,
				projectType,
				special,
				new,
				bestSeller,
				price
			}`
    )
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error", error));
};
