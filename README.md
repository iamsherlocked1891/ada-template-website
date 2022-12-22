# How Has Political Sentiment Changed Over the Course of the Pandemic?

## Grouping Countries by Response

We can imagine that countries can be grouped together based on their response to the COVID pandemic.
From `interventions.csv`, we can calculate how long it took for the first measures to be imposed after the first case in the country, and for how long mobility in the country was reduced. Based on these two measures, we can try to find clusters of countries in order to group them.

We calculate the Silhouette Score for different numbers of clusters in order to find the optimal number of clusters.

![Shilhouetette Score for Each Value of K](assets/img/Shilhouetette_Score_for_Each_Value_of_K.png)

