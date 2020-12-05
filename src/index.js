import app from './app';
import variables from './config/variables';
app.listen(variables.port,()=> console.log(`Server on port ${variables.port}`));


