class ScenarioManager {
    constructor() {
        // Local testing URL - make sure this matches your directory structure
        this.DATA_URL = '../public/data/scenarios.json';
    }

    async fetchScenario(scenarioId) {
        try {
            // For local testing, fetch all scenarios and filter
            const response = await fetch(this.DATA_URL);
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            return data.list.find(s => s.id === scenarioId);
        } catch (error) {
            console.error('Error fetching scenario:', error);
            return null;
        }
    }

    async fetchAllScenarios() {
        try {
            const response = await fetch(this.DATA_URL);
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            return data.list || [];
        } catch (error) {
            console.error('Error fetching scenarios:', error);
            return [];
        }
    }
}