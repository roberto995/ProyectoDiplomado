    
<?php
	session_start();
?>

<?php  
	
	class sesioniDoctor{

		private $host="localhost";
		private $username="root";
		private $password="";
		private $database="tfidoctor";
		private $DbCon;

		public function conectar(){
			$con = new mysqli($this->host,$this->username,$this->password,$this->database);			
			if($con){
				$this->DbCon=$con;				
				return true;
			}else{				
				return false;
			}
		}


		public function login($user, $password){		
			$query="SELECT * FROM doctores WHERE Usua_D = '$user' AND WHERE Pass = '$password'";											
			$doctor=$this->DbCon->query($query);

			if(!is_null($doctor)){				
				return json_encode($doctor);
			}else{
				return "error";				 				
				
			}
		}		

	}	

?>

<?php  
	if (array_key_exists('isesion',$_GET)) {		
		$usuario = $_GET['usuario'];
		$password = $_GET['password'];
		
		$login = new sesioniDoctor;
		$login->conectar();				
		$login->login( $usuario, $password);
	}
?>
