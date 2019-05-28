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
	}

  ?>