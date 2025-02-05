class ScenarioManager {
    constructor(apiKey) {
        //this.NOCODB_API_URL = 'https://app.nocodb.com/api/v2/tables/m3b3etu2u8oragh/records';
        //this.NOCODB_AUTH_TOKEN = apiKey;
        this.NOCODB_API_URL = '/data/scenarios.json';


    }

    async fetchScenario(scenarioId) {
        try {
            const response = await fetch(
                `${this.NOCODB_API_URL}?where=(scenario_id,eq,${scenarioId})`,
                {
                    headers: {
                        'accept': 'application/json',
                        'xc-token': this.NOCODB_AUTH_TOKEN
                    }
                }
            );

            if (!response.ok) throw new Error('Failed to fetch scenario');
            const data = await response.json();
            return data.list?.[0];
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    async fetchAllScenarios() {
        try {
            const response = await fetch(
                this.NOCODB_API_URL,
                {
                    headers: {
                        'accept': 'application/json',
                        'xc-token': this.NOCODB_AUTH_TOKEN
                    }
                }
            );

            if (!response.ok) throw new Error('Failed to fetch scenarios');
            const data = await response.json();
            return data.list || [];
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }
}